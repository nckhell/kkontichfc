/* eslint-disable global-require */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import kbvbApiUrls from "../src/config/api/kbvb_graphql";
import Layout from "../src/components/layout/Layout";
import GameComponent from "../src/components/games/GameComponent";
import RankingComponent from "../src/components/ranking/RankingComponent";
import CalendarTableComponent from "../src/components/calendar/CalendarTableComponent";
import PlayersAndStaffOverview from "../src/components/teams/PlayersAndStaffOverview";

class TeamPage extends Component {
  state = {
    activePage: "overzicht"
  };

  componentDidMount() {}

  filterPage = e => {
    e.preventDefault();
    const pageFilter = e.target.id;
    this.setState({ activePage: pageFilter });
  };

  render() {
    const { activePage } = this.state;
    const { teamID } = this.props;
    const pageTitle = kbvbApiUrls[teamID].staticRoutingInfo.readableTitle;

    return (
      <Layout>
        <div className="px-4 mt-8 md:mt-10 container mx-auto">
          <h1>{pageTitle && pageTitle}</h1>
          <div className="mt-6 mb-8">
            <ul className="tab-wrapper">
              <li>
                <a
                  className={activePage === "overzicht" ? "active" : ""}
                  href="#overzicht"
                  onClick={this.filterPage}
                  id="overzicht"
                >
                  Overzicht en rangschikking
                </a>
              </li>
              <li>
                <a
                  className={activePage === "kalender" ? "active" : ""}
                  href="#kalender"
                  onClick={this.filterPage}
                  id="kalender"
                >
                  Kalender en uitslagen
                </a>
              </li>
              <li>
                <a
                  className={activePage === "spelers-staff" ? "active" : ""}
                  href="#spelers-staff"
                  onClick={this.filterPage}
                  id="spelers-staff"
                >
                  Spelers en staf
                </a>
              </li>
            </ul>
          </div>
          {activePage === "overzicht" && (
            <div className="my-6">
              <h3>Kalenderoverzicht</h3>
              <div className="lg:flex lg:flex-wrap lg:-mx-2">
                <div
                  id="latest-game"
                  className="mb-4 w-full lg:w-1/2 lg:mb-0 lg:px-2"
                >
                  <GameComponent
                    title="Laatste wedstrijd"
                    type="latest-game"
                    teamID={teamID}
                  />
                </div>
                <div id="next-game" className="w-full lg:w-1/2 lg:px-2">
                  <GameComponent
                    title="Volgende wedstrijd"
                    type="next-game"
                    teamID={teamID}
                  />
                </div>
              </div>
              <div className="button-w-full text-center mt-8 relative">
                <a
                  href={prefixURL("#kalender")}
                  id="kalender"
                  onClick={this.filterPage}
                  className="btn mx-auto block"
                >
                  Volledige kalender
                </a>
              </div>
              <div className="my-6 lg:my-12">
                <h3>Rangschikking</h3>
                <RankingComponent teamID={teamID} />
              </div>
            </div>
          )}
          {activePage === "kalender" && (
            <div>
              <h3>Volledige kalender</h3>
              <CalendarTableComponent teamID={teamID} />
            </div>
          )}
          {activePage === "spelers-staff" && (
            <div>
              <PlayersAndStaffOverview teamID={teamID} />
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

TeamPage.propTypes = {
  teamID: PropTypes.string.isRequired
};

TeamPage.getInitialProps = ({ query }) => {
  const { teamID } = query;
  return { teamID };
};

export default TeamPage;
