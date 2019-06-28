import React from "react";
import PropTypes from "prop-types";
import UpcomingEventItem from "./UpcomingEventItem";
import SUMMARY_JSON from "../../../content/build/evenementen/summary.json";
import {
  sortEventsSummaryJsonOnDate,
  sortEventsOnOnlyEventsInTheFuture,
  limit
} from "../../utils/events";

const UpcomingEvents = props => {
  const { nbrOfItems } = props;
  let upcomingEvents = sortEventsOnOnlyEventsInTheFuture(
    sortEventsSummaryJsonOnDate(SUMMARY_JSON)
  );
  upcomingEvents = limit(upcomingEvents, nbrOfItems);

  return (
    <div className="mt-6 lg:flex lg:-mx-2 flex-wrap">
      {upcomingEvents &&
        upcomingEvents.map(event => {
          return <UpcomingEventItem data={event} key={event.base} />;
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
