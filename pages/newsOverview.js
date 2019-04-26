/* eslint-disable global-require */
import React, { Component } from "react";
import Layout from "../src/components/layout/Layout";
import SUMMARY_JSON from "../content/nieuws/build/summary.json";
import { Link } from "next-prefixed";
import {
  getAllNewsCategories,
  getAllSeasonsWithNews,
  sortNewsSummaryJsonOnDate,
  makeUrl
} from "../src/utils/news";
import { formatDate } from "../src/utils/dateTimeFormat";

class NewsOverviewPage extends Component {
  state = {
    newsCategories: getAllNewsCategories(),
    seasons: getAllSeasonsWithNews(),
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
              <div key={newsArticle.dir}>
                <p>{newsArticle.title}</p>
                <p>{newsArticle.preview}</p>
                <p>{date}</p>
                <Link href={href}>
                  <a>Meer lezen..</a>
                </Link>
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

export default NewsOverviewPage;
