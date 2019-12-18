/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef-init */
import React, { Component } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import TopscorersPlaceholder from "./TopscorersPlaceholder";
import fetch from "../../services/api/fetch";
import kbvbApiUrls from "../../imports/api/kbvb/graphql/api_endpoints";
import { topscorersApiUrlLens } from "../../imports/api/kbvb/graphql/lenses/sub-types/topscorers";
import {
  topscorersLens,
  playerFirstNameLens,
  playerLastNameLens,
  numberOfGoalsLens,
  numberOfMatchesLens
} from "../../imports/api/kbvb/topscorers/lenses";

class Topscorers extends Component {
  state = {
    isLoading: true,
    topscorers: [],
    error: null
  };

  componentDidMount() {
    this.fetchTopscorers();
  }

  componentDidUpdate(prevProps) {
    const { teamID } = this.props;

    if (prevProps.teamID !== teamID) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isLoading: true, topscorers: [] });
      this.fetchRanking();
    }
  }

  fetchTopscorers() {
    const { teamID } = this.props;

    fetch(
      R.compose(
        R.view(topscorersApiUrlLens),
        R.view(R.lensProp(teamID))
      )(kbvbApiUrls)
    )
      .then(data =>
        this.setState({
          topscorers: R.view(topscorersLens, data),
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { topscorers, isLoading, error } = this.state;
    let rowCount = 0;

    if (topscorers) {
      const playersThatScored = arr =>
        arr.filter(player => R.view(numberOfGoalsLens, player) > 0);

      const sortTopscorers = listOfPlayersThatScored =>
        listOfPlayersThatScored.sort((a, b) =>
          R.view(numberOfGoalsLens, a) > R.view(numberOfGoalsLens, b) ? -1 : 1
        );

      const playersThatScoredInOrder = R.compose(
        sortTopscorers,
        playersThatScored
      )(topscorers);

      return (
        <ReactPlaceholder
          ready={!isLoading}
          showLoadingAnimation
          customPlaceholder={TopscorersPlaceholder}
        >
          <div>
            {error ? <p>{error.message}</p> : null}
            {!isLoading && playersThatScoredInOrder.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="ranking-table w-full text-center">
                  <thead>
                    <tr className="text-gray-600">
                      <th className="">#</th>
                      <th className="text-left">Speler</th>
                      <th className="text-left font-semibold">Doelpunten</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playersThatScoredInOrder &&
                      playersThatScoredInOrder.map(player => {
                        rowCount += 1;
                        return (
                          <tr
                            key={`${R.view(
                              playerFirstNameLens,
                              player
                            )}-${R.view(playerLastNameLens, player)}`}
                          >
                            <td className="font-semibold no-padding">
                              {rowCount}
                            </td>
                            <td className="text-left">
                              {R.view(playerFirstNameLens, player)}{" "}
                              {R.view(playerLastNameLens, player)}
                            </td>
                            <td className="text-left">
                              <span className="font-semibold">
                                {R.view(numberOfGoalsLens, player)}{" "}
                                {R.view(numberOfGoalsLens, player) > 1
                                  ? "doelpunten"
                                  : "doelpunt"}
                              </span>{" "}
                              in {R.view(numberOfMatchesLens, player)}{" "}
                              wedstrijden
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            ) : (
              // If there is a delay in data, let's let the user know it's loading
              <h3>Loading...</h3>
            )}
          </div>
        </ReactPlaceholder>
      );
    }
    return <div>Geen topscorers</div>;
  }
}

Topscorers.propTypes = {
  teamID: PropTypes.string.isRequired
};

export default Topscorers;
