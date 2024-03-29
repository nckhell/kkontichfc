/* eslint-disable prettier/prettier */
/* eslint-disable global-require */
import React, { Component } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import kbvbApiUrls from "../src/imports/api/kbvb/graphql/api_endpoints";
import { readableTitleLens } from "../src/imports/api/kbvb/graphql/lenses/sub-types/routing-info";
import Layout from "../src/components/layout/Layout";
import GameComponent from "../src/components/games/GameComponent";
import RankingComponent from "../src/components/ranking/RankingComponent";
import CalendarTableComponent from "../src/components/calendar/CalendarTableComponent";
import PlayersAndStaffOverview from "../src/components/teams/PlayersAndStaffOverview";
import Topscorers from "../src/components/topscorers/Topscorers";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import mapUrlToBreadcrumbs from "../src/utils/mapUrlToBreadcrumb";

class TeamPage extends Component {
  state = {
    activePage: "spelers-staff",
  };

  componentDidMount() {}

  filterPage = (e) => {
    e.preventDefault();
    const pageFilter = e.target.id;
    this.setState({ activePage: pageFilter });
  };

  render() {
    const { activePage } = this.state;
    const { teamID, fullUrl } = this.props;
    const pageTitle = R.compose(
      R.view(readableTitleLens),
      R.view(R.lensProp(teamID))
    )(kbvbApiUrls);

    const breadcrumbs = mapUrlToBreadcrumbs(fullUrl);
    const seoMaleOrFemale =
      breadcrumbs[0].title.charAt(0).toUpperCase() +
      breadcrumbs[0].title.slice(1);
    const seoTeam =
      breadcrumbs[1].title.charAt(0).toUpperCase() +
      breadcrumbs[1].title.slice(1);

    return (
      <Layout showSpecificImageHeader teamIdOfImageToShow={teamID}>
        <NextSeo
          config={{
            title: `${seoTeam} | ${seoMaleOrFemale}`,
            description: `Rangschikking, kalender, staff en spelers van onze ${pageTitle}`,
            canonical: `https://www.kkontichfc.be${fullUrl}`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: `https://www.kkontichfc.be${fullUrl}`,
              title: `${seoTeam} | ${seoMaleOrFemale} | K. Kontich F.C.`,
              description: `Rangschikking, kalender, staff en spelers van onze ${pageTitle}`,
            },
          }}
        />
        <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
          <BreadCrumb data={breadcrumbs} />
        </div>
        <div className="px-4 mt-8 md:mt-10 container mx-auto">
          <div className="body-content">
            <h1 className="pb-6 inline-block lg:w-4/6">
              {pageTitle && pageTitle}
            </h1>
          </div>
          <div className="mt-6 mb-8">
            <ul className="tab-wrapper">
              {"ranking" in R.view(R.lensProp(teamID), kbvbApiUrls) &&
                "latestGame" in R.view(R.lensProp(teamID), kbvbApiUrls) &&
                "nextGame" in R.view(R.lensProp(teamID), kbvbApiUrls) && (
                  <li>
                    <a
                      className={activePage === "overzicht" ? "active" : ""}
                      href="#overzicht"
                      title="Overzicht en rangschikkking"
                      onClick={this.filterPage}
                      id="overzicht"
                    >
                      Overzicht en rangschikking
                    </a>
                  </li>
                )}
              {"calendar" in R.view(R.lensProp(teamID), kbvbApiUrls) && (
                <li>
                  <a
                    className={activePage === "kalender" ? "active" : ""}
                    href="#kalender"
                    title="Kalender en uitslagen"
                    onClick={this.filterPage}
                    id="kalender"
                  >
                    Kalender en uitslagen
                  </a>
                </li>
              )}
              <li>
                <a
                  className={activePage === "spelers-staff" ? "active" : ""}
                  href="#spelers-staff"
                  title="spelers en staff"
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
                  title="Volledige kalender"
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
          {activePage === "topschutters" && (
            <div>
              <Topscorers teamID={teamID} />
            </div>
          )}
        </div>
        <div className="spacer mb-16 md:mb-24"></div>
      </Layout>
    );
  }
}

TeamPage.propTypes = {
  teamID: PropTypes.string.isRequired,
  fullUrl: PropTypes.string.isRequired,
};

TeamPage.getInitialProps = ({ query }) => {
  const { teamID, fullUrl } = query;
  return { teamID, fullUrl };
};

export default TeamPage;
