import React from "react";
import PropTypes from "prop-types";
import ReportItem from "./ReportItem";

const ReportsList = props => {
  const { data } = props;

  return (
    <div className="mt-6 md:flex md:-mx-2 flex-wrap">
      {data &&
        data.map(report => {
          return <ReportItem data={report} key={report.base} />;
        })}
    </div>
  );
};

ReportsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default ReportsList;
