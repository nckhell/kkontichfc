import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import NewsItem from "./NewsItem";
import SUMMARY_JSON from "../../../content/build/nieuws/summary.json";
import { sortNewsSummaryJsonOnDate, limit } from "../../utils/news";

const LatestNews = props => {
  const { nbrOfItems, excludeWithSlug, excludeSliderItems } = props;
  let latestNewsList = sortNewsSummaryJsonOnDate(SUMMARY_JSON);
  latestNewsList = _.filter(latestNewsList, item => {
    return item.base !== excludeWithSlug;
  });

  if (excludeSliderItems) {
    latestNewsList = _.filter(latestNewsList, item => {
      return item.slider !== "YES";
    });
  }

  latestNewsList = limit(latestNewsList, nbrOfItems);

  return (
    <div className="mt-6 md:flex md:-mx-2 flex-wrap justify-center">
      {latestNewsList &&
        latestNewsList.map(newsArticle => {
          return <NewsItem data={newsArticle} key={newsArticle.base} />;
        })}
      {!latestNewsList && (
        <p className="lg:px-2">
          We hebben momenteel geen nieuws om aan je te tonen.
        </p>
      )}
    </div>
  );
};

LatestNews.defaultProps = {
  nbrOfItems: 3,
  excludeWithSlug: "",
  excludeSliderItems: false
};

LatestNews.propTypes = {
  nbrOfItems: PropTypes.number,
  excludeWithSlug: PropTypes.string,
  excludeSliderItems: PropTypes.bool
};

export default LatestNews;
