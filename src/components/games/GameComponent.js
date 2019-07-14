import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import { formatDate, formatTime } from "../../utils/dateTimeFormat";
import fetch from "../../services/api/fetch";
import kbvbApiUrls from "../../config/api/kbvb_graphql";
import GameComponentPlaceholder from "./GameComponentPlaceholder";
import NoGameToShow from "./NoGameToShow";

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
      fetch(kbvbApiUrls[teamID].latestGame.url)
        .then(data =>
          this.setState({
            game: data.data.lastPlayedMatch,
            type: "latest-game",
            isLoading: false
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    if (type === "next-game") {
      fetch(kbvbApiUrls[teamID].nextGame.url)
        .then(data =>
          this.setState({
            game: data.data.upcomingMatch,
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
      const date = formatDate(game.startDate);
      const time = formatTime(game.startDate);

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
                <div className="border-gray-200 border-b text-center font-semibold py-4 text-lg uppercase">
                  {title}
                </div>
                <div className="border-gray-200 border-b flex relative">
                  <div className="absolute rounded-full p-2 flex items-center justify-center bg-gray-200 text-gray-400 text-xs font-semibold center-absolute">
                    VS
                  </div>
                  <div className="w-1/2 py-6 border-gray-200 border-r flex flex-col justify-center items-center text-center">
                    <div className="flex items-center">
                      <img
                        src={game.homeTeam.logo}
                        className="h-16 inline-block"
                        alt={game.homeTeam.name}
                      />{" "}
                      {type === "latest-game" && (
                        <span className="pl-4 font-semibold text-4xl text-gray-900">
                          {game.outcome.homeTeamGoals}
                        </span>
                      )}
                    </div>
                    <span className="uppercase pt-4 text-gray-400 font-semibold">
                      {game.homeTeam.name}
                    </span>
                  </div>
                  <div className="w-1/2 py-6 flex justify-center flex-col items-center text-center">
                    <div className="flex items-center">
                      {type === "latest-game" && (
                        <span className="pr-4 font-semibold text-4xl text-gray-900">
                          {game.outcome.awayTeamGoals}
                        </span>
                      )}
                      <img
                        src={game.awayTeam.logo}
                        className="h-16 inline-block"
                        alt={game.awayTeam.name}
                      />{" "}
                    </div>
                    <span className="uppercase text-gray-400 pt-4 font-semibold">
                      {game.awayTeam.name}
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
                  <span className="italic pt-2">{game.series.name}</span>
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
