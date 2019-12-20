import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import _ from "lodash";
import NewsItem from "./NewsItem";
import SUMMARY_JSON from "../../../content/build/nieuws/summary.json";
import { sortNewsSummaryJsonOnDate } from "../../utils/news";
import { sliderLens } from "../../imports/api/news/lenses";
import { filenameLens } from "../../imports/api/shared/lenses";

const LatestNews = props => {
  const { nbrOfItems, excludeWithSlug, excludeSliderItems } = props;

  const filterOutNewsItemWithSpecificSlug = input =>
    _.filter(input, item => R.view(filenameLens, item) !== excludeWithSlug);

  const isNoSliderItem = newsItem => R.view(sliderLens, newsItem) !== "YES";

  const latestNewsList = R.compose(
    R.take(nbrOfItems),
    news => {
      if (excludeSliderItems) {
        return R.filter(isNoSliderItem, news);
      }
      return news;
    },
    filterOutNewsItemWithSpecificSlug,
    sortNewsSummaryJsonOnDate
  )(SUMMARY_JSON);

  return (
    <div className="mt-6 md:flex md:-mx-2 flex-wrap justify-center">
      {latestNewsList &&
        latestNewsList.map(newsArticle => {
          return (
            <NewsItem
              data={newsArticle}
              key={R.view(filenameLens, newsArticle)}
            />
          );
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
