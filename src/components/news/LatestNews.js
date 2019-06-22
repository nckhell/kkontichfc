import React from "react";
import _ from "lodash";
import NewsItem from "./NewsItem";
import SUMMARY_JSON from "../../../content/build/nieuws/summary.json";
import { sortNewsSummaryJsonOnDate, limit } from "../../utils/news";

const LatestNews = props => {
  const { nbrOfItems, excludeWithSlug } = props;
  let latestNewsList = sortNewsSummaryJsonOnDate(SUMMARY_JSON);
  latestNewsList = limit(
    _.filter(latestNewsList, item => {
      return item.base !== excludeWithSlug;
    }),
    nbrOfItems
  );

  return (
    <div className="mt-6 lg:flex lg:-mx-2 flex-wrap">
      {latestNewsList.map(newsArticle => {
        return <NewsItem data={newsArticle} key={newsArticle.base} />;
      })}
    </div>
  );
};

export default LatestNews;
