/* eslint-disable react/no-danger */
import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like } from "react-facebook";
import ReactSVG from "react-svg";
import { makeUrl, getCategoryFromNewsPost } from "../../utils/news";
import { formatDate } from "../../utils/dateTimeFormat";
import {
  dateLens,
  titleLens,
  backgroundPositionLens
} from "../../imports/api/news/lenses";
import {
  dirLens,
  cloudinaryIdLens,
  previewLens
} from "../../imports/api/shared/lenses";

const NewsItem = props => {
  const { data } = props;

  const href = makeUrl(data);
  const date = formatDate(R.view(dateLens, data));
  const category = getCategoryFromNewsPost(R.view(dirLens, data));

  const composeImageUrl = cloudinaryId => {
    if (cloudinaryId) {
      return `https://res.cloudinary.com/kkontichfc/image/upload/c_fit,h_391,q_90,w_632/nieuws/${cloudinaryId}`;
    }
    return prefixURL("/static/img/no-news-image.png");
  };

  const imageUrl = composeImageUrl(R.view(cloudinaryIdLens, data));

  return (
    <article className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2">
      <a
        href={prefixURL(href)}
        title={R.view(titleLens, data)}
        className="border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"
      >
        <div
          className="w-full h-48 lg:h-56 bg-cover"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundPosition: `${
              R.view(backgroundPositionLens, data)
                ? R.view(backgroundPositionLens, data)
                : "center"
            }`
          }}
        >
          <div className={`news-category mt-4 ml-6 ${category}`}>
            {category}
          </div>
        </div>
        <div className="h-56 overlow-y-hidden px-6">
          <div className="text-xl leading-relaxed pt-6 font-montserrat font-medium tracking-tighter">
            {R.view(titleLens, data)}
          </div>
          <div
            className="text-sm leading-loose pt-2 text-gray-600 overflow-y-hidden"
            dangerouslySetInnerHTML={{
              __html: `${R.view(previewLens, data)} ...`
            }}
          />
        </div>
        <div className="pb-4 px-6 flex text-xs text-gray-600 justify-between">
          <div content={R.view(dateLens, data)}>
            <ReactSVG
              className="inline-block align-middle pr-2"
              beforeInjection={svg => {
                svg.setAttribute("style", "fill: #52606D");
              }}
              src={prefixURL("/static/img/clock.svg")}
            />
            {date}
          </div>
          <div>
            <FacebookProvider appId="346435965433483">
              <Like
                href={`https://www.kkontichfc.be${href}`}
                colorScheme="dark"
                layout="button_count"
                showFaces={false}
                share={false}
              />
            </FacebookProvider>
          </div>
        </div>
      </a>
    </article>
  );
};

NewsItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default NewsItem;
