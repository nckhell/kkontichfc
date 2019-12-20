/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import * as R from "ramda";
import NextSeo from "next-seo";
import Layout from "../src/components/layout/Layout";
import SUMMARY_JSON from "../content/build/nieuws/summary.json";
import {
  getAllNewsCategories,
  getAllSeasonsWithNews,
  getSeasonFromNewsPost,
  sortNewsSummaryJsonOnDate,
  getCategoryFromNewsPost
} from "../src/utils/news";
import NewsList from "../src/components/news/NewsList";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import Settings from "../settings";
import { dirLens } from "../src/imports/api/shared/lenses";

class NewsListPage extends Component {
  state = {
    newsCategoriesInFilter: getAllNewsCategories(SUMMARY_JSON),
    seasonInFilter: Settings.currentSeason,
    newsList: sortNewsSummaryJsonOnDate(SUMMARY_JSON)
  };

  constructor() {
    super();
    this.filterNewsCategories = this.filterNewsCategories.bind(this);
    this.filterSeason = this.filterSeason.bind(this);
  }

  componentDidMount() {}

  filterSeason = e => {
    e.preventDefault();
    const seasonInFilter = e.target.id;
    this.setState({ seasonInFilter });
  };

  filterNewsCategories = e => {
    const { newsCategoriesInFilter } = this.state;

    if (!e.target.checked) {
      let found = newsCategoriesInFilter.indexOf(e.target.name);

      while (found !== -1) {
        newsCategoriesInFilter.splice(found, 1);
        found = newsCategoriesInFilter.indexOf(e.target.name);
      }
    }

    if (e.target.checked) {
      if (newsCategoriesInFilter.indexOf(e.target.name) === -1) {
        newsCategoriesInFilter.push(e.target.name);
      }
    }

    this.setState({ newsCategoriesInFilter });
  };

  render() {
    const { newsCategoriesInFilter, seasonInFilter, newsList } = this.state;
    const newsCategories = getAllNewsCategories(SUMMARY_JSON);
    const seasons = getAllSeasonsWithNews(SUMMARY_JSON);

    const compareSeason = newsItem =>
      getSeasonFromNewsPost(R.view(dirLens, newsItem)) === seasonInFilter;

    const compareNewsCategories = newsItem =>
      newsCategoriesInFilter.indexOf(
        getCategoryFromNewsPost(R.view(dirLens, newsItem))
      ) !== -1;

    const filteredNewsList = R.compose(
      R.filter(compareNewsCategories),
      R.filter(compareSeason)
    )(newsList);

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: "Nieuws",
            description: "Lees het laatste nieuws omtrent K. Kontich F.C.",
            canonical: `https://www.kkontichfc.be/nieuws/overzicht/`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: "https://www.kkontichfc.be/nieuws/overzicht/",
              title: "Nieuws | K. Kontich F.C.",
              description: "Lees het laatste nieuws omtrent K. Kontich F.C."
            }
          }}
        />
        <main>
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <BreadCrumb
              data={[{ title: "nieuwsoverzicht", url: "nieuws/overzicht" }]}
            />
          </div>
          <section className="container mt-8 md:mt-10 mx-auto px-4">
            <div className="body-content">
              <h1 className="pb-6 inline-block lg:w-4/6">Nieuwsoverzicht</h1>
            </div>
            <div className="my-6">
              <ul className="tab-wrapper">
                {seasons &&
                  seasons.map(season => {
                    return (
                      <li className="inline-block" key={season}>
                        <a
                          className={seasonInFilter === season ? "active" : ""}
                          href={`#${season}`}
                          title={season}
                          onClick={this.filterSeason}
                          id={season}
                        >
                          {season}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="bg-gray-111 border border-gray-100 pt-6 pb-4 px-6 my-8">
              <div className="-mx-2">
                {newsCategories &&
                  newsCategories.map(category => {
                    return (
                      <div
                        className="checkbox-wrapper inline-block"
                        key={category}
                      >
                        <label className="checklabel" htmlFor={category}>
                          <input
                            className="checkbox mr-2"
                            type="checkbox"
                            name={category}
                            id={category}
                            checked={
                              newsCategoriesInFilter.indexOf(category) > -1
                            }
                            readOnly
                            onChange={this.filterNewsCategories}
                          />
                          <span>{category}</span>
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
            <NewsList data={filteredNewsList} />
          </section>
          <div className="spacer mb-16 md:mb-24"></div>
        </main>
      </Layout>
    );
  }
}

export default NewsListPage;
