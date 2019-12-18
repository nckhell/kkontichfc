import React, { Component } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import fetch from "../src/services/api/fetch";
import kbvbApiUrls from "../src/imports/api/kbvb/graphql/api_endpoints";
import { rankingApiUrlLens } from "../src/imports/api/kbvb/graphql/lenses/sub-types/ranking";
import { readableTitleLens } from "../src/imports/api/kbvb/graphql/lenses/sub-types/routing-info";
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

    fetch(
      R.compose(
        R.view(rankingApiUrlLens),
        R.view(R.lensProp(teamID))
      )(kbvbApiUrls)
    )
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
    const { teamID } = this.props;
    const pageTitle = R.compose(
      R.view(readableTitleLens),
      R.view(R.lensProp(teamID))
    )(kbvbApiUrls);

    return (
      <Layout>
        <div className="px-4 container mx-auto">
          <h1>Klassement {pageTitle && pageTitle}</h1>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            <RankingComponent rankings={rankings} />
          ) : (
            // If there is a delay in data, let's let the user know it's loading
            <h3>Loading...</h3>
          )}
        </div>
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
