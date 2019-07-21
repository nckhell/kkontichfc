/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import _ from "lodash";
import NextSeo from "next-seo";
import Layout from "../src/components/layout/Layout";
import SUMMARY_JSON from "../content/build/wedstrijdverslagen/summary.json";
import {
  getSeasonFromGameReport,
  getAllSeasonsWithGameReports,
  sortGameReportsSummaryJsonOnDate
} from "../src/utils/gamereports";
import ReportsList from "../src/components/gamereport/ReportsList";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import Settings from "../settings";

class GameReportsListPage extends Component {
  state = {
    seasonInFilter: Settings.currentSeason,
    gameReportsList: sortGameReportsSummaryJsonOnDate(SUMMARY_JSON),
    filteredGameReportsList: sortGameReportsSummaryJsonOnDate(SUMMARY_JSON)
  };

  constructor() {
    super();
    this.filterSeason = this.filterSeason.bind(this);
  }

  componentDidMount() {}

  filterSeason = e => {
    e.preventDefault();
    const seasonInFilter = e.target.id;
    this.setState({ seasonInFilter });
  };

  render() {
    const { seasonInFilter, gameReportsList } = this.state;
    let { filteredGameReportsList } = this.state;

    // Filter on season
    filteredGameReportsList = _.filter(gameReportsList, item => {
      return getSeasonFromGameReport(item.dir) === seasonInFilter;
    });

    const seasons = getAllSeasonsWithGameReports(SUMMARY_JSON);

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: "Wedstrijdverslagen",
            description:
              "Benieuwd naar het verloop van wedstrijden? Lees hier de verschillende wedstrijdverslagen.",
            canonical: `https://www.kkontichfc.be/wedstrijdverslagen/`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: "https://www.kkontichfc.be/wedstrijdverslagen/",
              title: "Wedstrijdverslagen | K. Kontich F.C.",
              description:
                "Benieuwd naar het verloop van wedstrijden? Lees hier de verschillende wedstrijdverslagen."
            }
          }}
        />
        <main>
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <BreadCrumb
              data={[
                { title: "wedstrijdverslagen", url: "wedstrijdverslagen/" }
              ]}
            />
          </div>
          <section className="container mt-8 md:mt-10 mx-auto px-4">
            <div className="body-content">
              <h1 className="pb-6 inline-block lg:w-4/6">Wedstrijdverslagen</h1>
            </div>
            <div className="my-6">
              <ul className="tab-wrapper">
                {seasons &&
                  seasons.map(season => {
                    return (
                      <li className="inline-block" key={season}>
                        <a
                          className={seasonInFilter === season ? "active" : ""}
                          href={`#${season}`}
                          title={season}
                          onClick={this.filterSeason}
                          id={season}
                        >
                          {season}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <ReportsList data={filteredGameReportsList} />
          </section>
          <div className="spacer mb-16 md:mb-24"></div>
        </main>
      </Layout>
    );
  }
}

export default GameReportsListPage;
