import React, { Component } from "react";
import PropTypes from "prop-types";
import fetch from "../src/services/api/fetch";
import kbvbApiUrls from "../src/config/api/kbvb_graphql";
import RankingComponent from "../src/components/ranking/RankingComponent";
import Layout from "../src/components/layout/Layout";

class RankingPage extends Component {
  state = {
    isLoading: true,
    rankings: [],
    error: null
  };

  componentDidMount() {
    this.fetchRanking();
  }

  fetchRanking() {
    const { teamID } = this.props;

    fetch(kbvbApiUrls[teamID].ranking.url)
      .then(data =>
        this.setState({
          rankings: data.data.seriesRankings.rankings,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, rankings, error } = this.state;

    return (
      <Layout>
        <h1>Calendar</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <RankingComponent rankings={rankings} />
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </Layout>
    );
  }
}

RankingPage.propTypes = {
  teamID: PropTypes.string.isRequired
};

RankingPage.getInitialProps = ({ query }) => {
  const { teamID } = query;
  return { teamID };
};

export default RankingPage;
