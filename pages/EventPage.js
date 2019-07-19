/* eslint-disable global-require */
import React, { Component } from "react";
import NextSeo from "next-seo";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like, Comments } from "react-facebook";
import Layout from "../src/components/layout/Layout";
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
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: `${EventJson.title} | Evenementen`,
            description: `${EventJson.preview}...`,
            canonical: `https://www.kkontichfc.be${href}`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: `https://www.kkontichfc.be${href}`,
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
                  {
                    title: "commercieel",
                    url: "#"
                  },
                  {
                    title: "evenementen",
                    url: "evenementen"
                  },
                  {
                    title: EventJson.title,
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
              itemType="http://schema.org/Event"
            >
              <h1 itemProp="name" className="my-6 inline-block lg:w-5/6">
                {EventJson.title}
              </h1>
              <div
                className="mb-8 text-gray-900 font-semibold"
                itemProp="startDate"
                dateTime={EventJson.date}
              >
                {date}
              </div>
              <div
                itemProp="location"
                itemScope
                itemType="http://schema.org/Place"
              >
                <meta itemProp="name" content="K. Kontich F.C." />
                <div
                  itemProp="address"
                  itemitemScopescope
                  itemType="http://schema.org/PostalAddress"
                >
                  <meta
                    itemProp="address"
                    content="Duffelsesteenweg 73, 2550 Kontich"
                  />
                </div>
              </div>
              {EventJson.cloudinaryID && (
                <figure
                  className="mb-8"
                  itemProp="image"
                  itemScope
                  itemType="http://schema.org/ImageObject"
                >
                  <CloudinaryContext cloudName="kkontichfc">
                    <Image
                      className="w-full h-auto"
                      publicId={`evenementen/${EventJson.cloudinaryID}`}
                      alt={EventJson.title}
                      secure
                    >
                      <Transformation width="800" height="600" crop="fill" />
                    </Image>
                  </CloudinaryContext>
                  <meta itemProp="height" content="800" />
                  <meta itemProp="width" content="600" />
                  <meta
                    itemProp="url"
                    content={
                      EventJson.cloudinaryID
                        ? imageSeo[0].url
                        : prefixURL("/static/img/no-news-image.png")
                    }
                  />
                  <figcaption className="italic text-base text-gray-300">
                    {EventJson.figCaption}
                  </figcaption>
                </figure>
              )}
              {/* eslint-disable-next-line react/no-danger */}
              <div
                itemProp="description"
                dangerouslySetInnerHTML={{ __html: EventJson.bodyHtml }}
              />
              <FacebookProvider appId="346435965433483">
                <div className="my-6">
                  <Like
                    href={`https://www.kkontichfc.be/${href}`}
                    colorScheme="dark"
                    showFaces
                    size="large"
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
        <div className="spacer mb-16 md:mb-24"></div>
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
