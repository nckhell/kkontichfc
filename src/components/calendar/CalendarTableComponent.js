import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { formatDate, formatTime } from "../../utils/dateTimeFormat";

const CalendarTableComponent = props => {
  const { data } = props;

  if (data && !_.isEmpty(data) && _.isArray(data)) {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Aanvang</th>
              <th>Type</th>
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
                    <td>{calendarEntry.series.name}</td>
                    <td>
                      <img
                        src={calendarEntry.homeTeam.logo}
                        alt={`Clublogo ${calendarEntry.homeTeam.name}`}
                        width="22"
                      />
                      {calendarEntry.homeTeam.name}
                    </td>
                    <td>
                      <img
                        src={calendarEntry.awayTeam.logo}
                        alt={`Clublogo ${calendarEntry.awayTeam.name}`}
                        width="22"
                      />
                      {calendarEntry.awayTeam.name}
                    </td>
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
  }
  return <div>No calendar available</div>;
};

CalendarTableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CalendarTableComponent;
