import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like } from "react-facebook";
import ReactSVG from "react-svg";
import { makeUrl, getCategoryFromNewsPost } from "../../utils/news";
import { formatDate } from "../../utils/dateTimeFormat";

const NewsItem = props => {
  const { data } = props;

  const href = makeUrl(data);
  const date = formatDate(data.date);
  const category = getCategoryFromNewsPost(data.dir);
  let imageUrl;

  if (data.cloudinaryID) {
    imageUrl = `http://res.cloudinary.com/kkontichfc/image/upload/c_fit,h_391,q_90,w_632/nieuws/${data.cloudinaryID}`;
  } else {
    imageUrl = prefixURL("/static/img/no-news-image.png");
  }

  return (
    <article
      className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2"
      itemScope
      itemType="http://schema.org/NewsArticle"
    >
      <a
        href={prefixURL(href)}
        title={data.title}
        className="border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"
      >
        <div
          className="w-full h-48 lg:h-56 bg-cover"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundPosition: `${
              data.backgroundPosition ? data.backgroundPosition : "center"
            }`
          }}
        />
        <div
          className={`news-category text-gray-300 pt-8 px-6 ${category}`}
          itemProp="genre"
        >
          {category}
        </div>
        <div
          className="text-xl leading-relaxed pt-6 px-6 h-40"
          itemProp="headline"
        >
          {data.title}
        </div>
        <div className="pb-4 px-6 flex text-xs text-gray-600 justify-between">
          <div itemProp="datePublished" content={data.date}>
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
