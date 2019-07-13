import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import RankingTableComponent from "./RankingTableComponent";
import RankingPlaceholder from "./RankingPlaceholder";
import NoRankingToShow from "./NoRankingToShow";
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
          rankings: data.data.seriesRankings,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { rankings, isLoading, error } = this.state;

    if (rankings) {
      return (
        <ReactPlaceholder
          ready={!isLoading}
          showLoadingAnimation
          customPlaceholder={RankingPlaceholder}
        >
          <div>
            {error ? <p>{error.message}</p> : null}
            {!isLoading && rankings.rankings.length > 0 ? (
              <Tabs
                wrapperClassName="ranking-wrapper"
                tabListClassName="ranking-tabs"
                tabContentClassName="ranking-table"
              >
                {rankings.rankings.map(ranking => {
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
        </ReactPlaceholder>
      );
    }
    return <div>{NoRankingToShow}</div>;
  }
}

RankingComponent.propTypes = {
  teamID: PropTypes.string.isRequired
};

export default RankingComponent;
