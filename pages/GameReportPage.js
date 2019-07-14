/* eslint-disable global-require */
import React, { Component } from "react";
import Layout from "../src/components/layout/Layout";

class GameReportPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { gameReportJson } = this.props;

    return (
      <Layout showGrassHeader>
        <h1>
          {gameReportJson.homeTeam} - {gameReportJson.awayTeam}
        </h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: gameReportJson.bodyHtml }} />
      </Layout>
    );
  }
}

GameReportPage.getInitialProps = ({ query }) => {
  /* eslint-disable import/no-dynamic-require */
  const fileName = query.path.split(".json").join("");

  // Without .json require is not working, so exclude it first
  const gameReportJson = require(`../${fileName}.json`);
  return { gameReportJson };
};

export default GameReportPage;
