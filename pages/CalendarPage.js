import React, { Component } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import fetch from "../src/services/api/fetch";
import kbvbApiUrls from "../src/imports/api/kbvb/graphql/api_endpoints";
import { calendarApiUrlLens } from "../src/imports/api/kbvb/graphql/lenses/sub-types/calendar";
import { readableTitleLens } from "../src/imports/api/kbvb/graphql/lenses/sub-types/routing-info";
import { calendarLens } from "../src/imports/api/kbvb/calendar/lenses";
import CalendarTableComponent from "../src/components/calendar/CalendarTableComponent";
import Layout from "../src/components/layout/Layout";

class CalendarPage extends Component {
  state = {
    isLoading: true,
    calendar: {},
    error: null
  };

  componentDidMount() {
    this.fetchCalendar();
  }

  fetchCalendar() {
    const { teamID } = this.props;

    fetch(
      R.compose(
        R.view(calendarApiUrlLens),
        R.view(R.lensProp(teamID))
      )(kbvbApiUrls)
    )
      .then(data =>
        this.setState({
          calendar: R.view(calendarLens, data),
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, calendar, error } = this.state;
    const { teamID } = this.props;
    const pageTitle = R.compose(
      R.view(readableTitleLens),
      R.view(R.lensProp(teamID))
    )(kbvbApiUrls);

    return (
      <Layout>
        <div className="px-4 container mx-auto md:px-0">
          <h1>Kalender {pageTitle && pageTitle}</h1>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            <CalendarTableComponent data={calendar} />
          ) : (
            // If there is a delay in data, let's let the user know it's loading
            <h3>Loading...</h3>
          )}
        </div>
      </Layout>
    );
  }
}

CalendarPage.propTypes = {
  teamID: PropTypes.string.isRequired
};

CalendarPage.getInitialProps = ({ query }) => {
  const { teamID } = query;
  return { teamID };
};

export default CalendarPage;
