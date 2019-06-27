import React from "react";
import PropTypes from "prop-types";
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

NewsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default NewsList;
