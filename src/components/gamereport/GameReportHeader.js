import React, { Component } from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";
import { formatDate, formatTime } from "../../utils/dateTimeFormat";
import fetch from "../../services/api/fetch";

class GameReportHeader extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { gameDetails } = this.props;
    const grassHeaderUrl = prefixURL("/static/img/grass-texture.jpg");

    const date = formatDate(gameDetails.startDate);
    const time = formatTime(gameDetails.startDate);

    return (
      <div
        className="bg-no-repeat bg-cover bg-center relative game-report-header"
        style={{
          backgroundImage: `url('${grassHeaderUrl}')`
        }}
      >
        <div className="py-48 z-50 px-4 container mx-auto text-left relative">
          <div className="w-full mx-auto lg:w-5/6">
            <div className="text-sm md:text-base font-semibold text-white mb-8">
              <ReactSVG
                className="inline-block align-middle pr-2"
                beforeInjection={svg => {
                  svg.setAttribute("style", "fill: #fff");
                }}
                src={prefixURL("/static/img/clock.svg")}
              />
              {date}, gespeeld om {time}
            </div>
            <div className="flex text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-relaxed">
              <div>
                <div>
                  <span
                    className={`${
                      gameDetails.homeTeam.registrationNumber === "03029"
                        ? "text-yellow-500"
                        : ""
                    }`}
                  >
                    {gameDetails.homeTeam.name}
                  </span>
                </div>
                <div>
                  <span
                    className={`${
                      gameDetails.awayTeam.registrationNumber === "03029"
                        ? "text-yellow-500"
                        : ""
                    }`}
                  >
                    {gameDetails.awayTeam.name}
                  </span>
                </div>
              </div>
              <div className="pl-8">
                <div>
                  <span
                    className={`${
                      gameDetails.homeTeam.registrationNumber === "03029"
                        ? "text-yellow-500"
                        : ""
                    }`}
                  >
                    {gameDetails.outcome.homeTeamGoals}
                  </span>
                </div>
                <div>
                  <span
                    className={`${
                      gameDetails.awayTeam.registrationNumber === "03029"
                        ? "text-yellow-500"
                        : ""
                    }`}
                  >
                    {gameDetails.outcome.awayTeamGoals}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GameReportHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gameDetails: PropTypes.object.isRequired
};

export default GameReportHeader;
