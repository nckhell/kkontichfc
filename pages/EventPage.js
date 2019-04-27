/* eslint-disable global-require */
import React, { Component } from "react";
import Layout from "../src/components/layout/Layout";

class EventPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { EventJson } = this.props;

    return (
      <Layout>
        <h1>{EventJson.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: EventJson.bodyHtml }} />
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
