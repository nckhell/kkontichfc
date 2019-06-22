import React from "react";
import { prefixURL } from "next-prefixed";
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
    imageUrl = `http://res.cloudinary.com/kkontichfc/image/upload/v1/nieuws/${data.cloudinaryID}`;
  } else {
    imageUrl = prefixURL("/static/img/no-news-image.png");
  }

  return (
    <article className=" mb-4 w-full lg:w-1/3 lg:px-2">
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
        <div className={`news-category text-gray-300 pt-8 px-6 ${category}`}>
          {category}
        </div>
        <div className="text-xl leading-relaxed pt-6 px-6 h-40">
          {data.title}
        </div>
        <div className="pb-4 px-6 flex text-xs text-gray-600 justify-between">
          <div>
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
            <ReactSVG
              className="inline-block align-middle pr-2"
              beforeInjection={svg => {
                svg.setAttribute("style", "fill: #52606D");
                svg.setAttribute("style", "height: 24px");
                svg.setAttribute("style", "width: 24px");
              }}
              src={prefixURL("/static/img/eye.svg")}
            />
            2042x
          </div>
        </div>
      </a>
    </article>
  );
};

export default NewsItem;
