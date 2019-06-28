/* eslint-disable global-require */
import React, { Component } from "react";
import _ from "lodash";
import Layout from "../src/components/layout/Layout";
import SUMMARY_JSON from "../content/build/evenementen/summary.json";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";
import EventList from "../src/components/events/EventList";
import {
  sortEventsSummaryJsonOnDate,
  sortEventsOnOnlyEventsInTheFuture,
  getAllSeasonsWithEvents,
  getSeasonFromEvent
} from "../src/utils/events";
import Settings from "../settings";

class EventsListPage extends Component {
  state = {
    eventsList: sortEventsSummaryJsonOnDate(SUMMARY_JSON),
    filteredEventsList: sortEventsSummaryJsonOnDate(SUMMARY_JSON),
    seasonInFilter: Settings.currentSeason,
    showPastEventsFilter: true
  };

  constructor() {
    super();
    this.filterShowPastEvents = this.filterShowPastEvents.bind(this);
    this.filterSeason = this.filterSeason.bind(this);
  }

  componentDidMount() {}

  filterSeason = e => {
    e.preventDefault();
    const seasonInFilter = e.target.id;
    this.setState({ seasonInFilter });
  };

  filterShowPastEvents = () => {
    let { showPastEventsFilter } = this.state;
    showPastEventsFilter = !showPastEventsFilter;
    this.setState({ showPastEventsFilter });
  };

  render() {
    const { showPastEventsFilter, seasonInFilter, eventsList } = this.state;
    let { filteredEventsList } = this.state;

    const seasons = getAllSeasonsWithEvents(SUMMARY_JSON);

    // Filter on season
    filteredEventsList = _.filter(eventsList, item => {
      return getSeasonFromEvent(item.dir) === seasonInFilter;
    });

    // Filter on past
    if (!showPastEventsFilter) {
      filteredEventsList = sortEventsOnOnlyEventsInTheFuture(
        filteredEventsList
      );
    }

    return (
      <Layout>
        <main>
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <BreadCrumb
              data={[
                { title: "commercieel", url: "nieuws" },
                { title: "evenementen", url: "evenementen" }
              ]}
            />
          </div>
          <section className="container mt-8 md:mt-10 mx-auto px-4">
            <h1>Evenementen</h1>
            <div className="my-6">
              <ul className="tab-wrapper">
                {seasons &&
                  seasons.map(season => {
                    return (
                      <li className="inline-block" key={season}>
                        <a
                          className={seasonInFilter === season ? "active" : ""}
                          href={`#${season}`}
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
            <div className="bg-gray-111 border border-gray-100 pt-6 pb-4 px-6 my-8">
              <div className="-mx-2">
                <div className="checkbox-wrapper inline-block">
                  <label className="checklabel" htmlFor="show_past">
                    <input
                      className="checkbox mr-2"
                      type="checkbox"
                      name="show_past"
                      id="show_past"
                      checked={showPastEventsFilter}
                      readOnly
                      onChange={this.filterShowPastEvents}
                    />
                    <span>Toon evenementen uit verleden</span>
                  </label>
                </div>
              </div>
            </div>
            <EventList data={filteredEventsList} />
          </section>
          <HeadSponsors />
        </main>
      </Layout>
    );
  }
}

export default EventsListPage;
