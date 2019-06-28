/* eslint-disable global-require */
import React, { Component } from "react";
import NextSeo from "next-seo";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like, Comments } from "react-facebook";
import Layout from "../src/components/layout/Layout";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import { makeUrl } from "../src/utils/events";
import { formatDate } from "../src/utils/dateTimeFormat";

class EventPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { EventJson } = this.props;
    const date = formatDate(EventJson.date);
    const href = makeUrl(EventJson);

    let imageSeo = [];
    if (EventJson.cloudinaryID) {
      imageSeo = [
        {
          url: `https://res.cloudinary.com/kkontichfc/image/upload/c_fill,h_630,w_1200/evenementen/${EventJson.cloudinaryID}`,
          width: "1200",
          height: "630",
          alt: `${EventJson.title}`
        }
      ];
    }

    return (
      <Layout>
        <NextSeo
          config={{
            title: `${EventJson.title} | Evenementen`,
            description: `${EventJson.preview}...`,
            canonical: `https://kkontichfc.be${href}`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: `https://kkontichfc.be${href}`,
              title: `${EventJson.title} | Evenementen | K. Kontich F.C.`,
              description: `${EventJson.preview}...`,
              images: imageSeo
            }
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full mx-auto lg:w-5/6">
              <BreadCrumb
                data={[
                  { title: "commercieel", url: "commercieel" },
                  {
                    title: "evenementen",
                    url: "evenementen"
                  },
                  {
                    title: EventJson.title,
                    url: ""
                  }
                ]}
              />
            </div>
          </div>
          <div className="px-4 md:mt-4 md:mt-5 container mx-auto text-left">
            <article className="body-content w-full mx-auto lg:w-5/6">
              <h1 className="my-6 inline-block lg:w-4/6">{EventJson.title}</h1>
              <div className="mb-8 text-gray-900 font-semibold">{date}</div>
              {EventJson.cloudinaryID && (
                <figure className="mb-8">
                  <CloudinaryContext cloudName="kkontichfc">
                    <Image
                      className="w-full h-auto"
                      publicId={`evenementen/${EventJson.cloudinaryID}`}
                    >
                      <Transformation width="800" height="600" crop="fill" />
                    </Image>
                  </CloudinaryContext>
                  <figcaption className="italic text-base text-gray-300">
                    {EventJson.figCaption}
                  </figcaption>
                </figure>
              )}
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: EventJson.bodyHtml }} />
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
        <HeadSponsors />
      </Layout>
    );
  }
}

EventPage.getInitialProps = ({ query }) => {
  /* eslint-disable import/no-dynamic-require */
  const fileName = query.path.split(".json").join("");

  // Without .json require is not working, so exclude it first
  const EventJson = require(`../${fileName}.json`);
  return { EventJson };
};

export default EventPage;
