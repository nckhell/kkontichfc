import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import ReportItem from "./ReportItem";
import SUMMARY_JSON from "../../../content/build/wedstrijdverslagen/summary.json";
import {
  sortGameReportsSummaryJsonOnDate,
  limit
} from "../../utils/gamereports";

const LatestGameReports = props => {
  const { nbrOfItems, excludeWithSlug } = props;
  let latestGameReportsList = sortGameReportsSummaryJsonOnDate(SUMMARY_JSON);
  latestGameReportsList = limit(
    _.filter(latestGameReportsList, item => {
      return item.base !== excludeWithSlug;
    }),
    nbrOfItems
  );

  return (
    <div className="mt-6 md:flex md:-mx-2 flex-wrap justify-center">
      {latestGameReportsList &&
        latestGameReportsList.map(report => {
          return <ReportItem data={report} key={report.base} />;
        })}
      {!latestGameReportsList.length && (
        <p className="lg:px-2">We hebben nog geen andere wedstrijdverslagen.</p>
      )}
    </div>
  );
};

LatestGameReports.defaultProps = {
  nbrOfItems: 3,
  excludeWithSlug: ""
};

LatestGameReports.propTypes = {
  nbrOfItems: PropTypes.number,
  excludeWithSlug: PropTypes.string
};

export default LatestGameReports;
