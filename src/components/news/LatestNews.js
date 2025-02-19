import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import _ from "lodash";
import { prefixURL } from "next-prefixed";
import NewsItem from "./NewsItem";
import SUMMARY_JSON from "../../../content/build/nieuws/summary.json";
import { sortNewsSummaryJsonOnDate } from "../../utils/news";
import { sliderLens } from "../../imports/api/news/lenses";
import { filenameLens } from "../../imports/api/shared/lenses";

const LatestNews = (props) => {
  const { nbrOfItems, excludeWithSlug, excludeSliderItems } = props;

  const filterOutNewsItemWithSpecificSlug = (input) =>
    _.filter(input, (item) => R.view(filenameLens, item) !== excludeWithSlug);

  const isNoSliderItem = (newsItem) => R.view(sliderLens, newsItem) !== "YES";

  const latestNewsList = R.compose(
    R.take(nbrOfItems),
    (news) => {
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
        latestNewsList.map((newsArticle) => {
          return (
            <NewsItem
              data={newsArticle}
              key={R.view(filenameLens, newsArticle)}
            />
          );
        })}
      <article className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2">
        <a
          href={prefixURL(
            "/nieuws/2024-2025/algemeen/maak-jouw-firma-bekender-maak-onze-club-groter/"
          )}
          title="#"
          className="border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"
        >
          <div
            className="w-full h-48 lg:h-56 bg-cover"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/kkontichfc/image/upload/v1594664641/nieuws/29343059_2093388854012422_6186929821536127979_n_synlso.jpg)",
            }}
          >
            <div className="news-category mt-4 ml-6">Club</div>
          </div>
          <div className="h-56 overlow-y-hidden px-6">
            <div className="text-xl leading-relaxed pt-6 font-montserrat font-medium tracking-tighter">
              Word partner!
            </div>
            <div className="text-sm leading-loose pt-2 text-gray-600 overflow-y-hidden">
              <p>
                Word trotse partner van K. Kontich F.C. en steun onze club!
                Vergroot je zichtbaarheid en draag bij aan sportieve successen.
              </p>
              <br />
            </div>
          </div>
          <div className="h-10 mb-1"></div>
        </a>
      </article>
      <article className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2">
        <a
          href="https://forms.gle/5q5Nn2paueNb1S5w7"
          title="#"
          className="border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"
        >
          <div
            className="w-full h-48 lg:h-56 bg-cover"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/kkontichfc/image/upload/v1563875220/nieuws/42201321_2420249461326358_3819049121050787840_o_plubzk.jpg)",
            }}
          >
            <div className="news-category mt-4 ml-6">Club</div>
          </div>
          <div className="h-56 overlow-y-hidden px-6">
            <div className="text-xl leading-relaxed pt-6 font-montserrat font-medium tracking-tighter">
              Word lid!
            </div>
            <div className="text-sm leading-loose pt-2 text-gray-600 overflow-y-hidden">
              <p>
                Word lid van K Kontich FC! Schrijf je in voor onze jeugdploegen
                en ontwikkel je talent in een sportieve en leuke omgeving. Meld
                je vandaag nog aan!
              </p>
              <br />
            </div>
          </div>
          <div className="h-10 mb-1"></div>
        </a>
      </article>
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
  excludeSliderItems: false,
};

LatestNews.propTypes = {
  nbrOfItems: PropTypes.number,
  excludeWithSlug: PropTypes.string,
  excludeSliderItems: PropTypes.bool,
};

export default LatestNews;
