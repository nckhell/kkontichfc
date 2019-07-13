/* eslint-disable global-require */
import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import kbvbApiUrls from "../src/config/api/kbvb_graphql";

class MatchCenter extends Component {
  state = {
    activeTeam: "overzicht"
  };

  componentDidMount() {}

  filterPage = e => {
    e.preventDefault();
    const pageFilter = e.target.id;
    this.setState({ activePage: pageFilter });
  };

  render() {
    const { activeTeam } = this.state;

    return <p>Test</p>;
  }
}

export default MatchCenter;
