/* eslint-disable global-require */
import React, { Component } from "react";
import { Link } from "next-prefixed";
import Layout from "../src/components/layout/Layout";
import SUMMARY_JSON from "../content/build/nieuws/summary.json";
import {
  getAllNewsCategories,
  getAllSeasonsWithNews,
  sortNewsSummaryJsonOnDate,
  makeUrl
} from "../src/utils/news";
import { formatDate } from "../src/utils/dateTimeFormat";

class NewsListPage extends Component {
  state = {
    newsCategories: getAllNewsCategories(SUMMARY_JSON),
    seasons: getAllSeasonsWithNews(SUMMARY_JSON),
    newsList: sortNewsSummaryJsonOnDate(SUMMARY_JSON)
  };

  componentDidMount() {}

  render() {
    const { newsCategories, seasons, newsList } = this.state;

    return (
      <Layout>
        <div className="center mw6 pa3 pa4-ns">
          {newsList.map(newsArticle => {
            const href = makeUrl(newsArticle);
            const date = formatDate(newsArticle.date);
            return (
              <div key={newsArticle.base}>
                <p>{newsArticle.title}</p>
                <p>{newsArticle.preview}</p>
                <p>{date}</p>
                <Link href={href}>Meer lezen..</Link>
                <br />
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default NewsListPage;
