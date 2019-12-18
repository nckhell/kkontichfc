import React, { Component } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import { formatDate, formatTime } from "../../utils/dateTimeFormat";
import fetch from "../../services/api/fetch";
import kbvbApiUrls from "../../imports/api/kbvb/graphql/api_endpoints";
import GameComponentPlaceholder from "./GameComponentPlaceholder";
import NoGameToShow from "./NoGameToShow";
import { latestGameApiUrlLens } from "../../imports/api/kbvb/graphql/lenses/sub-types/latest-game";
import { nextGameApiUrlLens } from "../../imports/api/kbvb/graphql/lenses/sub-types/next-game";
import {
  startDateLens,
  upcomingMatchLens,
  lastPlayedMatchLens,
  homeTeamLens,
  awayTeamLens,
  teamNameLens,
  teamLogoLens,
  seriesNameLens
} from "../../imports/api/kbvb/matches/lenses";
import {
  homeTeamGoalsLens,
  awayTeamGoalsLens
} from "../../imports/api/kbvb/matches/lenses/sub-types/last-played-match";

class GameComponent extends Component {
  state = {
    isLoading: true,
    game: [],
    type: "",
    error: null
  };

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    const { teamID } = this.props;

    if (prevProps.teamID !== teamID) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isLoading: true, game: [] });
      this.fetch();
    }
  }

  fetch() {
    const { teamID, type } = this.props;

    if (type === "latest-game") {
      fetch(
        R.compose(
          R.view(latestGameApiUrlLens),
          R.view(R.lensProp(teamID))
        )(kbvbApiUrls)
      )
        .then(data =>
          this.setState({
            game: R.view(lastPlayedMatchLens, data),
            type: "latest-game",
            isLoading: false
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    if (type === "next-game") {
      fetch(
        R.compose(
          R.view(nextGameApiUrlLens),
          R.view(R.lensProp(teamID))
        )(kbvbApiUrls)
      )
        .then(data =>
          this.setState({
            game: R.view(upcomingMatchLens, data),
            type: "next-game",
            isLoading: false
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  }

  render() {
    const { isLoading, game, error, type } = this.state;
    const { title } = this.props;

    if (game) {
      let date;
      let time;

      if (!isLoading) {
        date = R.compose(
          formatDate,
          R.view(startDateLens)
        )(game);

        time = R.compose(
          formatTime,
          R.view(startDateLens)
        )(game);
      }

      return (
        <ReactPlaceholder
          ready={!isLoading}
          showLoadingAnimation
          customPlaceholder={GameComponentPlaceholder}
        >
          <div>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
              <div className="border border-gray-200 border-b-4">
                <div className="border-gray-200 border-b text-center font-semibold py-4 uppercase font-montserrat">
                  {title}
                </div>
                <div className="border-gray-200 border-b flex relative">
                  <div className="absolute rounded-full p-2 flex items-center justify-center bg-gray-200 text-gray-400 text-xs font-semibold center-absolute">
                    VS
                  </div>
                  <div className="w-1/2 py-6 border-gray-200 border-r flex flex-col justify-center items-center text-center">
                    <div className="flex items-center">
                      <img
                        src={R.compose(
                          R.view(teamLogoLens),
                          R.view(homeTeamLens)
                        )(game)}
                        className="h-16 inline-block"
                        alt={R.compose(
                          R.view(teamNameLens),
                          R.view(homeTeamLens)
                        )(game)}
                      />{" "}
                      {type === "latest-game" && (
                        <span className="pl-4 font-semibold text-4xl text-gray-900">
                          {R.view(homeTeamGoalsLens, game)}
                        </span>
                      )}
                    </div>
                    <span className="uppercase pt-4 text-gray-400 font-semibold">
                      {R.compose(
                        R.view(teamNameLens),
                        R.view(homeTeamLens)
                      )(game)}
                    </span>
                  </div>
                  <div className="w-1/2 py-6 flex justify-center flex-col items-center text-center">
                    <div className="flex items-center">
                      {type === "latest-game" && (
                        <span className="pr-4 font-semibold text-4xl text-gray-900">
                          {R.view(awayTeamGoalsLens, game)}
                        </span>
                      )}
                      <img
                        src={R.compose(
                          R.view(teamLogoLens),
                          R.view(awayTeamLens)
                        )(game)}
                        className="h-16 inline-block"
                        alt={R.compose(
                          R.view(teamNameLens),
                          R.view(awayTeamLens)
                        )(game)}
                      />{" "}
                    </div>
                    <span className="uppercase text-gray-400 pt-4 font-semibold">
                      {R.compose(
                        R.view(teamNameLens),
                        R.view(awayTeamLens)
                      )(game)}
                    </span>
                  </div>
                </div>
                <div className="text-lg text-gray-400 py-4 flex flex-col items-center justify-center text-center">
                  <div>
                    <span className="block font-semibold text-gray-600">
                      {date}
                    </span>
                    {type === "latest-game"
                      ? "Gespeeld om"
                      : "Wordt gespeeld om"}{" "}
                    {time}
                  </div>
                  <span className="italic pt-2">
                    {R.view(seriesNameLens, game)}
                  </span>
                </div>
              </div>
            ) : (
              // If there is a delay in data, let's let the user know it's loading
              <h3>Loading...</h3>
            )}
          </div>
        </ReactPlaceholder>
      );
    }
    return (
      <div>
        <NoGameToShow type={type} />
      </div>
    );
  }
}

GameComponent.propTypes = {
  teamID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GameComponent;
