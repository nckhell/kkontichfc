/* eslint-disable global-require */
import React, { Component } from "react";

class Page extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { pageJson } = this.props;

    return (
      <div>
        <h1>{pageJson.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: pageJson.bodyHtml }} />
      </div>
    );
  }
}

Page.getInitialProps = ({ query }) => {
  /* eslint-disable import/no-dynamic-require */
  const pageJson = require(`../content/pages${query.fullUrl}.json`);
  return { pageJson };
};

export default Page;
