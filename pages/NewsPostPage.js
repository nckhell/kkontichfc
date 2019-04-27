/* eslint-disable global-require */
import React, { Component } from "react";
import Layout from "../src/components/layout/Layout";

class NewsPostPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { NewsPostJson } = this.props;

    return (
      <Layout>
        <h1>{NewsPostJson.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: NewsPostJson.bodyHtml }} />
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
