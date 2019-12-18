import React, { Component } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import fetch from "../../services/api/fetch";
import CalendarTablePlaceholder from "./CalendarTablePlaceholder";
import kbvbApiUrls from "../../imports/api/kbvb/graphql/api_endpoints";
import { calendarApiUrlLens } from "../../imports/api/kbvb/graphql/lenses/sub-types/calendar";
import {
  calendarLens,
  startDateLens,
  seriesNameLens,
  homeTeamLens,
  awayTeamLens,
  teamNameLens,
  teamLogoLens,
  homeTeamGoalsLens,
  awayTeamGoalsLens
} from "../../imports/api/kbvb/calendar/lenses";
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
                    <tr key={R.view(R.lensProp("id"), calendarEntry)}>
                      <td>
                        {R.compose(
                          formatDateShort,
                          R.view(startDateLens)
                        )(calendarEntry)}
                      </td>
                      <td className="text-center">
                        {R.compose(
                          formatTime,
                          R.view(startDateLens)
                        )(calendarEntry)}
                      </td>
                      <td>{R.view(seriesNameLens, calendarEntry)}</td>
                      <td className="text-center">
                        <span
                          className="block w-10 h-10 bg-contain bg-no-repeat bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url('${R.compose(
                              R.view(teamLogoLens),
                              R.view(homeTeamLens)
                            )(calendarEntry)}')`
                          }}
                        ></span>
                      </td>
                      <td>
                        {R.compose(
                          R.lensProp("id"),
                          R.view(homeTeamLens)
                        )(calendarEntry) === "128030"
                          ? "KKFC"
                          : R.compose(
                              R.view(teamNameLens),
                              R.view(homeTeamLens)
                            )(calendarEntry)}
                      </td>
                      <td className="text-center">
                        <span
                          className="block w-10 h-10 bg-contain bg-no-repeat bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url('${R.compose(
                              R.view(teamLogoLens),
                              R.view(awayTeamLens)
                            )(calendarEntry)}')`
                          }}
                        ></span>
                      </td>
                      <td>
                        {R.compose(
                          R.lensProp("id"),
                          R.view(awayTeamLens)
                        )(calendarEntry) === "128030"
                          ? "KKFC"
                          : R.compose(
                              R.view(teamNameLens),
                              R.view(awayTeamLens)
                            )(calendarEntry)}
                      </td>
                      <td className="text-center font-semibold">
                        {R.view(homeTeamGoalsLens, calendarEntry)}-
                        {R.view(awayTeamGoalsLens, calendarEntry)}
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
