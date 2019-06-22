import React from "react";
import NewsItem from "./NewsItem";

const NewsList = props => {
  const { data } = props;

  return (
    <div className="mt-6 lg:flex lg:-mx-2 flex-wrap">
      {data &&
        data.map(newsArticle => {
          return <NewsItem data={newsArticle} key={newsArticle.base} />;
        })}
    </div>
  );
};

export default NewsList;
