/* eslint-disable global-require */
import React, { Component } from "react";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import { FacebookProvider, Like, Comments } from "react-facebook";
import LatestNews from "../src/components/news/LatestNews";
import ButtonWithLine from "../src/components/buttons/ButtonWithLine";
import { getCategoryFromNewsPost, makeUrl } from "../src/utils/news";
import { formatDate } from "../src/utils/dateTimeFormat";
import Layout from "../src/components/layout/Layout";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";

class NewsPostPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { NewsPostJson } = this.props;
    const date = formatDate(NewsPostJson.date);
    const category = getCategoryFromNewsPost(NewsPostJson.dir);
    const href = makeUrl(NewsPostJson);

    const categoryUpperCaseSeo =
      category.charAt(0).toUpperCase() + category.slice(1);

    let imageSeo = [];
    if (NewsPostJson.cloudinaryID) {
      imageSeo = [
        {
          url: `https://res.cloudinary.com/kkontichfc/image/upload/c_fill,h_630,w_1200/nieuws/${NewsPostJson.cloudinaryID}`,
          width: "1200",
          height: "630",
          alt: `${NewsPostJson.title}`
        }
      ];
    }

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: `${NewsPostJson.title} | ${categoryUpperCaseSeo}`,
            description: `${NewsPostJson.preview}...`,
            canonical: `https://kkontichfc.be${href}`,
            openGraph: {
              type: "article",
              locale: "nl_BE",
              url: `https://kkontichfc.be${href}`,
              title: `${NewsPostJson.title} | ${categoryUpperCaseSeo} | K. Kontich F.C.`,
              description: `${NewsPostJson.preview}...`,
              images: imageSeo
            }
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full mx-auto lg:w-5/6">
              <BreadCrumb
                data={[
                  { title: "nieuws", url: "nieuws/overzicht" },
                  {
                    title: "...",
                    url: ""
                  },
                  {
                    title: NewsPostJson.title,
                    url: ""
                  }
                ]}
              />
            </div>
          </div>
          <div className="px-4 md:mt-4 md:mt-5 container mx-auto text-left">
            <article
              className="body-content w-full mx-auto lg:w-5/6"
              itemScope
              itemType="http://schema.org/NewsArticle"
            >
              <div
                className={`news-category text-gray-300 pt-8 ${category}`}
                itemProp="genre"
              >
                {category}
              </div>
              <h1 className="my-6 inline-block lg:w-4/6" itemProp="headline">
                {NewsPostJson.title}
              </h1>
              <div
                className="mb-8 text-gray-900 font-semibold"
                itemProp="datePublished"
                content={NewsPostJson.date}
              >
                {date}
              </div>
              {NewsPostJson.cloudinaryID && (
                <figure
                  className="mb-8"
                  itemProp="image"
                  itemScope
                  itemType="http://schema.org/ImageObject"
                >
                  <CloudinaryContext cloudName="kkontichfc">
                    <Image
                      className="w-full h-auto"
                      publicId={`nieuws/${NewsPostJson.cloudinaryID}`}
                      alt={NewsPostJson.title}
                    >
                      <Transformation width="800" height="600" crop="fill" />
                    </Image>
                  </CloudinaryContext>
                  <meta itemProp="height" content="800" />
                  <meta itemProp="width" content="600" />
                  <figcaption className="italic text-base text-gray-300">
                    {NewsPostJson.figCaption}
                  </figcaption>
                </figure>
              )}
              {/* eslint-disable-next-line react/no-danger */}
              <div
                dangerouslySetInnerHTML={{ __html: NewsPostJson.bodyHtml }}
                itemProp="articleBody"
              />
              <FacebookProvider appId="346435965433483">
                <div className="my-6">
                  <Like
                    href={`https://kkontichfc.be${href}`}
                    colorScheme="dark"
                    showFaces
                    size="large"
                    share
                  />
                </div>
                <Comments
                  href={`https://kkontichfc.be${href}`}
                  width="100%"
                  numPosts="10"
                />
              </FacebookProvider>
            </article>
          </div>
          <img
            className="logo-kkfc-in-background"
            src={prefixURL("/static/img/kkontichfc.svg")}
            alt="K. Kontich F.C."
          />
        </div>
        <div className="my-16 h-1 w-full border-t border-gray-200" />
        <section className="container mx-auto px-4">
          <h1>Andere recente artikels</h1>
          <LatestNews nbrOfItems={3} excludeWithSlug={NewsPostJson.base} />
          <ButtonWithLine text="Meer nieuws" url="/nieuws/overzicht" />
        </section>
        {/* <HeadSponsors /> */}
      </Layout>
    );
  }
}

NewsPostPage.getInitialProps = ({ query }) => {
  /* eslint-disable import/no-dynamic-require */
  const fileName = query.path.split(".json").join("");

  // Without .json require is not working, so exclude it first
  const NewsPostJson = require(`../${fileName}.json`);
  return { NewsPostJson };
};

export default NewsPostPage;
