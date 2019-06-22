/* eslint-disable global-require */
import React, { Component } from "react";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like, Comments } from "react-facebook";
import LatestNews from "../src/components/news/LatestNews";
import ButtonWithLine from "../src/components/buttons/ButtonWithLine";
import { getCategoryFromNewsPost, makeUrl } from "../src/utils/news";
import { formatDate } from "../src/utils/dateTimeFormat";
import Layout from "../src/components/layout/Layout";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";

class NewsPostPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { NewsPostJson } = this.props;
    const date = formatDate(NewsPostJson.date);
    const category = getCategoryFromNewsPost(NewsPostJson.dir);
    const href = makeUrl(NewsPostJson);

    return (
      <Layout>
        <div id="kkfc-background-logo">
          <div className="px-4 container mx-auto text-left md:px-0">
            <article className="body-content w-full mx-auto lg:w-5/6">
              <div className={`news-category text-gray-300 pt-8 ${category}`}>
                {category}
              </div>
              <h1 className="my-6 inline-block lg:w-4/6">
                {NewsPostJson.title}
              </h1>
              <div className="mb-8 text-gray-900 font-semibold">{date}</div>
              {NewsPostJson.cloudinaryID && (
                <figure className="mb-8">
                  <CloudinaryContext cloudName="kkontichfc">
                    <Image
                      className="w-full h-auto"
                      publicId={`nieuws/${NewsPostJson.cloudinaryID}`}
                    >
                      <Transformation width="800" height="600" crop="fill" />
                    </Image>
                  </CloudinaryContext>
                  <figcaption className="italic text-base text-gray-300">
                    {NewsPostJson.figCaption}
                  </figcaption>
                </figure>
              )}
                {/* eslint-disable-next-line react/no-danger */}
              <div
                dangerouslySetInnerHTML={{ __html: NewsPostJson.bodyHtml }}
              />
              <FacebookProvider appId="346435965433483">
                <div className="my-6">
                  <Like
                    href={`https://kkontichfc.be/${href}`}
                    colorScheme="dark"
                    showFaces
                    share
                  />
                </div>
                <Comments href={`https://kkontichfc.be/${href}`} width="100%" />
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
        <section className="container mx-auto px-4 md:px-0">
          <h1>Andere recente artikels</h1>
          <LatestNews nbrOfItems={3} excludeWithSlug={NewsPostJson.base} />
          <ButtonWithLine text="Meer nieuws" url="/nieuws/overzicht" />
        </section>
        <HeadSponsors />
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
