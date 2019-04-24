import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import RankingTableComponent from "./RankingTableComponent";
import Tabs from "../tabs/Tabs";
import { getReadableRankingType } from "../../utils/ranking";

class RankingComponent extends Component {
  componentDidMount() {}

  render() {
    const { rankings } = this.props;

    if (rankings && !_.isEmpty(rankings) && _.isArray(rankings)) {
      return (
        <Tabs
          wrapperClassName="ranking-wrapper"
          tabListClassName="choose-ranking-type"
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
      );
    }
    return <div>No rankings</div>;
  }
}

RankingComponent.propTypes = {
  rankings: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RankingComponent;
