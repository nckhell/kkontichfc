import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchCalendar from "../src/services/api/calendar";
import kbvApiUrls from "../src/config/api/kbvb_graphql";
import CalendarTableComponent from "../src/components/calendar/CalendarTableComponent";

class calenderPage extends Component {
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

    fetchCalendar(kbvApiUrls[teamID].calendar.url)
      .then(data =>
        this.setState({
          calendar: data.data.teamCalendar,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, calendar, error } = this.state;

    return (
      <React.Fragment>
        <h1>Calendar</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <CalendarTableComponent data={calendar} />
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

calenderPage.propTypes = {
  teamID: PropTypes.string.isRequired
};

calenderPage.getInitialProps = ({ query }) => {
  const { teamID } = query;
  return { teamID };
};

export default calenderPage;
