/* eslint-disable global-require */
import React, { Component } from "react";
import Layout from "../src/components/layout/Layout";

class TextPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { pageJson } = this.props;

    return (
      <Layout>
        <h1>{pageJson.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: pageJson.bodyHtml }} />
      </Layout>
    );
  }
}

TextPage.getInitialProps = ({ query }) => {
  /* eslint-disable import/no-dynamic-require */
  // Without .json require is not working, so exclude it first
  const pageJson = require(`../content/build/pages${query.fullUrl}.json`);
  return { pageJson };
};

export default TextPage;
