import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import RankingTableComponent from "./RankingTableComponent";
import Tabs from "../tabs/Tabs";
import fetch from "../../services/api/fetch";
import kbvbApiUrls from "../../config/api/kbvb_graphql";
import { getReadableRankingType } from "../../utils/ranking";

class RankingComponent extends Component {
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
    const { rankings, isLoading, error } = this.state;

    return (
      <div>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <Tabs
            wrapperClassName="ranking-wrapper"
            tabListClassName="tab-wrapper my-6"
            tabContentClassName="ranking-table"
          >
            {rankings.map(ranking => {
              return (
                <div
                  key={ranking.type}
                  label={getReadableRankingType(ranking.type)}
                >
                  <RankingTableComponent
                    key={ranking.type}
                    typeOfRanking={ranking.type}
                    listOfTeams={ranking.teams}
                  />
                </div>
              );
            })}
          </Tabs>
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

RankingComponent.propTypes = {
  teamID: PropTypes.string.isRequired
};

export default RankingComponent;
