import React, { Component } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import RankingTableComponent from "./RankingTableComponent";
import RankingPlaceholder from "./RankingPlaceholder";
import NoRankingToShow from "./NoRankingToShow";
import Tabs from "../tabs/Tabs";
import fetch from "../../services/api/fetch";
import kbvbApiUrls from "../../imports/api/kbvb/graphql/api_endpoints";
import { rankingApiUrlLens } from "../../imports/api/kbvb/graphql/lenses/sub-types/ranking";
import {
  rankingsLens,
  rankingTypeLens,
  teamsInRankingLens
} from "../../imports/api/kbvb/rankings/lenses";
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

  componentDidUpdate(prevProps) {
    const { teamID } = this.props;

    if (prevProps.teamID !== teamID) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isLoading: true, rankings: [] });
      this.fetchRanking();
    }
  }

  fetchRanking() {
    const { teamID } = this.props;

    fetch(
      R.compose(
        R.view(rankingApiUrlLens),
        R.view(R.lensProp(teamID))
      )(kbvbApiUrls)
    )
      .then(data => {
        this.setState({
          rankings: R.view(rankingsLens, data),
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { rankings, isLoading, error } = this.state;
    const { limit } = this.props;

    if (rankings) {
      return (
        <ReactPlaceholder
          ready={!isLoading}
          showLoadingAnimation
          customPlaceholder={RankingPlaceholder}
        >
          <div>
            {error ? <p>{error.message}</p> : null}
            {!isLoading && rankings.length > 0 ? (
              <Tabs
                wrapperClassName="ranking-wrapper"
                tabListClassName="ranking-tabs"
                tabContentClassName="ranking-table"
              >
                {rankings.map(ranking => {
                  return (
                    <div
                      key={R.view(rankingTypeLens, ranking)}
                      label={R.compose(
                        getReadableRankingType,
                        R.view(rankingTypeLens)
                      )(ranking)}
                    >
                      <RankingTableComponent
                        key={R.view(rankingTypeLens, ranking)}
                        typeOfRanking={R.view(rankingTypeLens, ranking)}
                        listOfTeams={R.view(teamsInRankingLens, ranking)}
                        limit={limit}
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

RankingComponent.defaultProps = {
  limit: 30
};

RankingComponent.propTypes = {
  teamID: PropTypes.string.isRequired,
  limit: PropTypes.number
};

export default RankingComponent;
