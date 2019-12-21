import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import UpcomingEventItem from "./UpcomingEventItem";
import SUMMARY_JSON from "../../../content/build/evenementen/summary.json";
import {
  sortEventsSummaryJsonOnDate,
  sortEventsOnOnlyEventsInTheFuture
} from "../../utils/events";
import { filenameLens } from "../../imports/api/shared/lenses";

const UpcomingEvents = props => {
  const { nbrOfItems } = props;

  const upcomingEvents = R.compose(
    R.take(nbrOfItems),
    events => sortEventsOnOnlyEventsInTheFuture(events, true),
    events => sortEventsSummaryJsonOnDate(events, "asc")
  )(SUMMARY_JSON);

  return (
    <div className="mt-6 lg:flex lg:-mx-2 flex-wrap">
      {upcomingEvents &&
        upcomingEvents.map(event => {
          return (
            <UpcomingEventItem data={event} key={R.view(filenameLens, event)} />
          );
        })}
      {!upcomingEvents ||
        (upcomingEvents.length === 0 && (
          <p className="lg:px-2">Er zijn nog geen evementen ingepland.</p>
        ))}
    </div>
  );
};

UpcomingEvents.defaultProps = {
  nbrOfItems: 3
};

UpcomingEvents.propTypes = {
  nbrOfItems: PropTypes.number
};

export default UpcomingEvents;
