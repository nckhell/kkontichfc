/* eslint-disable global-require */
import React, { Component } from "react";
import NextSeo from "next-seo";
import Layout from "../src/components/layout/Layout";
import GameReportWrapper from "../src/components/gamereport/GameReportWrapper";

class GameReportPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    /* eslint-disable react/prop-types */
    const { gameReportJson, query } = this.props;

    return (
      <Layout>
        <GameReportWrapper gameReportData={gameReportJson} query={query} />
      </Layout>
    );
  }
}

GameReportPage.getInitialProps = ({ query }) => {
  /* eslint-disable import/no-dynamic-require */
  const fileName = query.path.split(".json").join("");

  // Without .json require is not working, so exclude it first
  const gameReportJson = require(`../${fileName}.json`);
  return { gameReportJson, query };
};

export default GameReportPage;
