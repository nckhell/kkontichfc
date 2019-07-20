import React from "react";
import PropTypes from "prop-types";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

const TimeLine = props => {
  const { data } = props;
  return (
    <VerticalTimeline animate={false}>
      {data &&
        data.map(event => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              date={`${event.time}'`}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <span className="vertical-timeline-element-title">
                {event.type}
              </span>
              <span className="vertical-timeline-element-subtitle">
                {event.name}
              </span>
            </VerticalTimelineElement>
          );
        })}
    </VerticalTimeline>
  );
};

TimeLine.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default TimeLine;
