/* eslint-disable global-require */
import React, { Component } from "react";
import * as R from "ramda";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import { FacebookProvider, Like, Comments } from "react-facebook";
import LatestNews from "../src/components/news/LatestNews";
import ButtonWithLine from "../src/components/buttons/ButtonWithLine";
import { getCategoryFromNewsPost, makeUrl } from "../src/utils/news";
import { formatDate } from "../src/utils/dateTimeFormat";
import Layout from "../src/components/layout/Layout";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import {
  dateLens,
  titleLens,
  showImageInArticleLens,
  figCaptionLens
} from "../src/imports/api/news/lenses";
import {
  cloudinaryIdLens,
  filenameLens,
  dirLens,
  previewLens,
  bodyLens
} from "../src/imports/api/shared/lenses";

class NewsPostPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { NewsPostJson } = this.props;
    const date = formatDate(R.view(dateLens, NewsPostJson));
    const category = getCategoryFromNewsPost(R.view(dirLens, NewsPostJson));
    const href = makeUrl(NewsPostJson);

    const categoryUpperCaseSeo =
      category.charAt(0).toUpperCase() + category.slice(1);

    const composeImageSeo = cloudinaryId =>
      cloudinaryId
        ? [
            {
              url: `https://res.cloudinary.com/kkontichfc/image/upload/c_fill,h_630,w_1200/nieuws/${cloudinaryId}`,
              width: "1200",
              height: "630",
              alt: `${R.view(titleLens, NewsPostJson)}`
            }
          ]
        : [];

    const imageSeo = composeImageSeo(R.view(cloudinaryIdLens, NewsPostJson));

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: `${R.view(
              titleLens,
              NewsPostJson
            )} | ${categoryUpperCaseSeo}`,
            description: `${R.view(previewLens, NewsPostJson)}...`,
            canonical: `https://www.kkontichfc.be${href}`,
            openGraph: {
              type: "article",
              locale: "nl_BE",
              url: `https://www.kkontichfc.be${href}`,
              title: `${R.view(
                titleLens,
                NewsPostJson
              )} | ${categoryUpperCaseSeo} | K. Kontich F.C.`,
              description: `${R.view(previewLens, NewsPostJson)}...`,
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
                    url: "#"
                  },
                  {
                    title: R.view(titleLens, NewsPostJson),
                    url: `https://www.kkontichfc.be${href}`
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
              <span itemProp="author" content="K. Kontich F.C." />
              <div
                itemProp="publisher"
                itemScope
                itemType="http://schema.org/Organization"
              >
                <div
                  itemProp="logo"
                  itemScope
                  itemType="http://schema.org/ImageObject"
                >
                  <meta
                    itemProp="url"
                    content="https://res.cloudinary.com/kkontichfc/image/upload/v1563367382/logo.png"
                  />
                </div>
                <meta itemProp="name" content="K. Kontich F.C." />
              </div>
              <link
                itemProp="mainEntityOfPage"
                href={`https://www.kkontichfc.be${href}`}
              />
              <div>
                <div
                  className={`news-category text-gray-300 pt-8 ${category}`}
                  itemProp="genre"
                >
                  {category}
                </div>
              </div>
              <h1 className="my-6 inline-block lg:w-5/6" itemProp="headline">
                {R.view(titleLens, NewsPostJson)}
              </h1>
              <div
                className="mb-8 text-gray-900 font-semibold"
                itemProp="datePublished"
                content={R.view(dateLens, NewsPostJson)}
              >
                {date}
              </div>
              {R.view(cloudinaryIdLens, NewsPostJson) &&
                R.view(showImageInArticleLens, NewsPostJson) !== "NO" && (
                  <figure
                    className="mb-8"
                    itemProp="image"
                    itemScope
                    itemType="http://schema.org/ImageObject"
                  >
                    <CloudinaryContext cloudName="kkontichfc">
                      <Image
                        className="w-full h-auto"
                        publicId={`nieuws/${R.view(
                          cloudinaryIdLens,
                          NewsPostJson
                        )}`}
                        alt={R.view(titleLens, NewsPostJson)}
                        secure
                      >
                        <Transformation width="800" height="600" crop="fill" />
                      </Image>
                    </CloudinaryContext>
                    <meta itemProp="height" content="630" />
                    <meta itemProp="width" content="1200" />
                    <meta
                      itemProp="url"
                      content={
                        R.view(cloudinaryIdLens, NewsPostJson)
                          ? R.head(imageSeo).url
                          : prefixURL("/static/img/no-news-image.png")
                      }
                    />
                    <figcaption className="italic text-base text-gray-300">
                      {R.view(figCaptionLens, NewsPostJson)}
                    </figcaption>
                  </figure>
                )}
              {/* eslint-disable-next-line react/no-danger */}
              <div
                dangerouslySetInnerHTML={{
                  __html: R.view(bodyLens, NewsPostJson)
                }}
                itemProp="articleBody"
              />
              <FacebookProvider appId="346435965433483">
                <div className="my-6">
                  <Like
                    href={`https://www.kkontichfc.be${href}`}
                    colorScheme="dark"
                    showFaces
                    size="large"
                    share
                  />
                </div>
                <Comments
                  href={`https://www.kkontichfc.be${href}`}
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
          <LatestNews
            nbrOfItems={3}
            excludeWithSlug={R.view(filenameLens, NewsPostJson)}
          />
          <ButtonWithLine text="Meer nieuws" url="/nieuws/overzicht" />
        </section>
        <div className="spacer mb-16 md:mb-24"></div>
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
