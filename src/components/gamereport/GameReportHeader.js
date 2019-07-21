import React, { Component } from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";
import { formatDate } from "../../utils/dateTimeFormat";

class GameReportHeader extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { gameDetails } = this.props;
    const grassHeaderUrl = prefixURL("/static/img/grass-texture.jpg");

    const date = formatDate(gameDetails.date);

    return (
      <div
        className="bg-no-repeat bg-cover bg-center relative game-report-header"
        style={{
          backgroundImage: `url('${grassHeaderUrl}')`
        }}
      >
        <div className="py-16 md:py-24 lg:py-32 xl:py-40 z-50 px-4 container mx-auto text-left relative">
          <div className="w-full mx-auto lg:w-5/6">
            <div className="news-category text-white mb-8 game-type position">
              {gameDetails.type}
            </div>
            <div className="flex text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-relaxed">
              <div>
                <div>
                  <span
                    className={`${
                      gameDetails.homeTeam === "K. Kontich F.C."
                        ? "text-yellow-500"
                        : ""
                    }`}
                  >
                    {gameDetails.homeTeam}
                  </span>
                </div>
                <div>
                  <span
                    className={`${
                      gameDetails.awayTeam === "K. Kontich F.C."
                        ? "text-yellow-500"
                        : ""
                    }`}
                  >
                    {gameDetails.awayTeam}
                  </span>
                </div>
              </div>
              <div className="pl-8">
                <div>
                  <span
                    className={`${
                      gameDetails.homeTeam === "K. Kontich F.C."
                        ? "text-yellow-500"
                        : ""
                    }`}
                  >
                    {gameDetails.homeTeamScore}
                  </span>
                </div>
                <div>
                  <span
                    className={`${
                      gameDetails.awayTeam === "K. Kontich F.C."
                        ? "text-yellow-500"
                        : ""
                    }`}
                  >
                    {gameDetails.awayTeamScore}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm md:text-base font-semibold text-white mt-8">
              <ReactSVG
                className="inline-block align-middle pr-2"
                beforeInjection={svg => {
                  svg.setAttribute("style", "fill: #fff");
                }}
                src={prefixURL("/static/img/clock.svg")}
              />
              Gespeeld op {date}
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
