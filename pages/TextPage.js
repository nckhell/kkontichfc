/* eslint-disable global-require */
import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like } from "react-facebook";
import Layout from "../src/components/layout/Layout";
import ButtonWithLine from "../src/components/buttons/ButtonWithLine";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";
import UpcomingEvents from "../src/components/events/UpcomingEvents";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import mapUrlToBreadcrumbs from "../src/utils/mapUrlToBreadcrumb";

class TextPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { pageJson, query } = this.props;
    const href = `${query.fullUrl}/`;
    const breadcrumbs = mapUrlToBreadcrumbs(href);

    return (
      <Layout>
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full mx-auto lg:w-5/6">
              <BreadCrumb data={breadcrumbs} />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
            <div className="body-content w-full mx-auto lg:w-5/6">
              <h1 className="pb-6 inline-block lg:w-4/6">{pageJson.title}</h1>
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: pageJson.bodyHtml }} />
              <FacebookProvider appId="346435965433483">
                <div className="my-6">
                  <Like
                    href={`https://kkontichfc.be/${href}`}
                    colorScheme="dark"
                    showFaces
                    share
                  />
                </div>
              </FacebookProvider>
            </div>
          </div>
          <img
            className="logo-kkfc-in-background"
            src={prefixURL("/static/img/kkontichfc.svg")}
            alt="K. Kontich F.C."
          />
        </div>
        <HeadSponsors />
        {/* <section className="container my-10 mx-auto px-4 lg:my-16">
          <h1>Evenementen</h1>
          <UpcomingEvents />
          <ButtonWithLine text="Alle evenementen" url="/evenementen/" />
        </section> */}
      </Layout>
    );
  }
}

TextPage.getInitialProps = ({ query }) => {
  /* eslint-disable import/no-dynamic-require */
  // Without .json require is not working, so exclude it first
  const pageJson = require(`../content/build/pages${query.fullUrl}.json`);
  return { pageJson, query };
};

export default TextPage;
