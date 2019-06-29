import React from "react";
import PropTypes from "prop-types";
import EventItem from "./EventItem";

const EventList = props => {
  const { data } = props;

  return (
    <div className="mt-6 md:flex md:-mx-2 flex-wrap">
      {data &&
        data.map(eventItem => {
          return <EventItem data={eventItem} key={eventItem.base} />;
        })}
      {!data && <p>Er zijn momenteel nog geen evenementen gepland.</p>}
    </div>
  );
};

EventList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default EventList;
