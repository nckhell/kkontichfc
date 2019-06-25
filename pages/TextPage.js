/* eslint-disable global-require */
import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like } from "react-facebook";
import Layout from "../src/components/layout/Layout";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";

class TextPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { pageJson, query } = this.props;
    const href = `${query.fullUrl}/`;

    return (
      <Layout>
        <div id="kkfc-background-logo">
          <div className="px-4 container mx-auto text-left md:px-0">
            <div className="body-content w-full mx-auto lg:w-5/6">
              <h1 className="my-6 inline-block lg:w-4/6">{pageJson.title}</h1>
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
