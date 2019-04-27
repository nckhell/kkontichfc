/* eslint-disable global-require */
import React, { Component } from "react";
import { Link } from "next-prefixed";
import Layout from "../src/components/layout/Layout";
import SUMMARY_JSON from "../content/evenementen/summary.json";
import { sortEventsSummaryJsonOnDate, makeUrl } from "../src/utils/events";
import { formatDate } from "../src/utils/dateTimeFormat";

class EventsListPage extends Component {
  state = {
    events: sortEventsSummaryJsonOnDate(SUMMARY_JSON)
  };

  componentDidMount() {}

  render() {
    const { events } = this.state;

    return (
      <Layout>
        <div>
          {events.map(event => {
            const href = makeUrl(event);
            const date = formatDate(event.date);
            return (
              <div key={event.base}>
                <p>{event.title}</p>
                <p>{event.preview}</p>
                <p>{date}</p>
                <Link href={href}>Meer lezen..</Link>
                <br />
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default EventsListPage;
