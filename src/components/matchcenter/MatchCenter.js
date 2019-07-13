/* eslint-disable global-require */
import React, { Component } from "react";
import GameComponent from "../games/GameComponent";
import RankingComponent from "../ranking/RankingComponent";
import ButtonWithLine from "../buttons/ButtonWithLine";
import kbvbApiUrls from "../../config/api/kbvb_graphql";

class MatchCenter extends Component {
  state = {
    activeTeam: "heren1eProv"
  };

  componentDidMount() {}

  filterTeam = e => {
    e.preventDefault();
    const teamFilter = e.target.id;
    this.setState({ activeTeam: teamFilter });
  };

  render() {
    const { activeTeam } = this.state;

    return (
      <div className="mt-6">
        <ul className="tab-wrapper">
          {Object.entries(kbvbApiUrls).map(team => {
            return (
              <li key={team[0]}>
                <a
                  id={team[0]}
                  className={activeTeam === team[0] ? "active" : ""}
                  title={team[1].staticRoutingInfo.readableTitle}
                  href={`#${team[0]}`}
                  onClick={this.filterTeam}
                >
                  {team[1].staticRoutingInfo.shortHandTitle}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="my-6 lg:flex lg:flex-wrap lg:-mx-2">
          <div
            id="latest-game"
            className="mb-4 w-full lg:w-1/2 lg:mb-0 lg:px-2"
          >
            <GameComponent
              title="Laatste wedstrijd"
              type="latest-game"
              teamID={activeTeam}
            />
          </div>
          <div id="next-game" className="w-full lg:w-1/2 lg:px-2">
            <GameComponent
              title="Volgende wedstrijd"
              type="next-game"
              teamID={activeTeam}
            />
          </div>
        </div>
        <div className="my-6 lg:my-12">
          <h3>Top 5</h3>
          <RankingComponent teamID={activeTeam} limit={5} />
          <div className="mt-4">
            <ButtonWithLine
              text={`Meer over onze ${kbvbApiUrls[activeTeam].staticRoutingInfo.readableTitle}`}
              url={kbvbApiUrls[activeTeam].staticRoutingInfo.url}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MatchCenter;
