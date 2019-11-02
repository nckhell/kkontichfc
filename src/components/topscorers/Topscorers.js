/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef-init */
import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import TopscorersPlaceholder from "./TopscorersPlaceholder";
import fetch from "../../services/api/fetch";
import kbvbApiUrls from "../../config/api/kbvb_graphql";

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

    fetch(kbvbApiUrls[teamID].topscorers.url)
      .then(data =>
        this.setState({
          topscorers: data.data.teamMembers.players,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { topscorers, isLoading, error } = this.state;
    let rowCount = 0;

    if (topscorers) {
      const playersThatScored = _.filter(
        topscorers,
        player => player.statistics.numberOfGoals > 0
      );

      const orderFromHighToLow = _.orderBy(
        playersThatScored,
        "statistics.numberOfGoals",
        "desc"
      );

      return (
        <ReactPlaceholder
          ready={!isLoading}
          showLoadingAnimation
          customPlaceholder={TopscorersPlaceholder}
        >
          <div>
            {error ? <p>{error.message}</p> : null}
            {!isLoading && orderFromHighToLow.length > 0 ? (
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
                    {orderFromHighToLow &&
                      orderFromHighToLow.map(player => {
                        rowCount += 1;
                        return (
                          <tr key={`${player.firstName}-${player.lastName}`}>
                            <td className="font-semibold no-padding">
                              {rowCount}
                            </td>
                            <td className="text-left">
                              {player.firstName} {player.lastName}
                            </td>
                            <td className="text-left">
                              <span className="font-semibold">
                                {player.statistics.numberOfGoals}{" "}
                                {player.statistics.numberOfGoals > 1
                                  ? "doelpunten"
                                  : "doelpunt"}
                              </span>{" "}
                              in {player.statistics.numberOfMatches} wedstrijden
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
