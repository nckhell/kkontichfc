import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import { dirLens, filenameLens } from "../../imports/api/shared/lenses";

const NewsList = props => {
  const { data } = props;

  return (
    <div className="mt-6 md:flex md:-mx-2 flex-wrap">
      {data &&
        data.map(newsArticle => {
          return (
            <NewsItem
              data={newsArticle}
              key={R.compose(
                str => str + R.view(filenameLens, newsArticle),
                R.view(dirLens)
              )(newsArticle)}
            />
          );
        })}
    </div>
  );
};

NewsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default NewsList;
