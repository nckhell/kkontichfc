import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import fetch from "../../services/api/fetch";
import CalendarTablePlaceholder from "./CalendarTablePlaceholder";
import kbvbApiUrls from "../../config/api/kbvb_graphql";
import { formatDateShort, formatTime } from "../../utils/dateTimeFormat";

class CalendarTableComponent extends Component {
  state = {
    isLoading: true,
    calendar: [],
    error: null
  };

  componentDidMount() {
    this.fetchCalendar();
  }

  fetchCalendar() {
    const { teamID } = this.props;

    fetch(kbvbApiUrls[teamID].calendar.url)
      .then(data =>
        this.setState({
          calendar: data.data.teamCalendar,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { calendar, isLoading, error } = this.state;

    return (
      <ReactPlaceholder
        ready={!isLoading}
        showLoadingAnimation
        customPlaceholder={CalendarTablePlaceholder}
      >
        {error ? <p>{error.message}</p> : null}
        <div className="overflow-x-auto">
          <table className="ranking-table w-full text-left">
            <thead>
              <tr className="text-gray-600">
                <th>Datum</th>
                <th className="text-center">Tijd</th>
                <th>Type</th>
                <th colSpan="2">Thuisploeg</th>
                <th colSpan="2">Uitploeg</th>
                <th className="text-center">Score</th>
              </tr>
            </thead>
            <tbody>
              {calendar &&
                calendar.map(calendarEntry => {
                  return (
                    <tr key={calendarEntry.id}>
                      <td>{formatDateShort(calendarEntry.startDate)}</td>
                      <td className="text-center">
                        {formatTime(calendarEntry.startDate)}
                      </td>
                      <td>{calendarEntry.series.name}</td>
                      <td className="text-center">
                        <span
                          className="block w-10 h-10 bg-contain bg-no-repeat bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url('${calendarEntry.homeTeam.logo}')`
                          }}
                        ></span>
                      </td>
                      <td>
                        {calendarEntry.homeTeam.id === "128030"
                          ? "KKFC"
                          : calendarEntry.homeTeam.name}
                      </td>
                      <td className="text-center">
                        <span
                          className="block w-10 h-10 bg-contain bg-no-repeat bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url('${calendarEntry.awayTeam.logo}')`
                          }}
                        ></span>
                      </td>
                      <td>
                        {calendarEntry.awayTeam.id === "128030"
                          ? "KKFC"
                          : calendarEntry.awayTeam.name}
                      </td>
                      <td className="text-center font-semibold">
                        {calendarEntry.outcome.homeTeamGoals}-
                        {calendarEntry.outcome.awayTeamGoals}
                      </td>
                    </tr>
                  );
                })}
              {!calendar && (
                <tr>
                  <td colSpan="7" className="text-center">
                    Momenteel nog geen kalender beschikbaar
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </ReactPlaceholder>
    );
  }
}

CalendarTableComponent.propTypes = {
  teamID: PropTypes.string.isRequired
};

export default CalendarTableComponent;
