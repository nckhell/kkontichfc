import React from "react";
import { prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";
import { makeUrl, getCategoryFromNewsPost } from "../../utils/news";
import { formatDate } from "../../utils/dateTimeFormat";

const CarouselItem = props => {
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
    <div
      className="w-full h-full bg-cover"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundPosition: `${
          data.backgroundPosition ? data.backgroundPosition : "center"
        }`
      }}
    >
      <div className="gradient-wrapper flex items-center">
        <div className="px-4 container mx-auto text-left md:px-0">
          <div className={`news-category text-white  ${category}`}>
            {category}
          </div>
          <a href={href} title={data.title} className="block">
            <div className="text-2xl py-4 font-semibold text-white md:text-3xl lg:w-4/6 xl:block xl:max-w-6xl xl:text-4xl">
              {/* <span className="text-yellow-400">Not implemented</span> */}
              {data.title}
            </div>
          </a>
          <div className="text-sm md:text-base font-semibold text-white">
            <ReactSVG
              className="inline-block align-middle pr-2"
              beforeInjection={svg => {
                svg.setAttribute("style", "fill: #fff");
              }}
              src={prefixURL("/static/img/clock.svg")}
            />
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
