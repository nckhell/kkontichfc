import React from "react";
import PropTypes from "prop-types";
import { formatDate, formatTime } from "../../utils/dateTimeFormat";

const CalendarTableComponent = props => {
  const { data } = props;

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Aanvang</th>
            <th>Thuisploeg</th>
            <th>Uitploeg</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(calendarEntry => {
              return (
                <tr key={calendarEntry.id}>
                  <td>{formatDate(calendarEntry.startDate)}</td>
                  <td>{formatTime(calendarEntry.startDate)}</td>
                  <td>{calendarEntry.homeTeam.name}</td>
                  <td>{calendarEntry.awayTeam.name}</td>
                  <td>
                    {calendarEntry.outcome.homeTeamGoals}-
                    {calendarEntry.outcome.awayTeamGoals}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

CalendarTableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CalendarTableComponent;
