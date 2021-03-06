import React from "react";
import { prefixURL } from "next-prefixed";
import PropTypes from "prop-types";
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
    imageUrl = `https://res.cloudinary.com/kkontichfc/image/upload/v1/nieuws/${data.cloudinaryID}`;
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
        <div className="px-4 container mx-auto text-left">
          <div className={`news-category text-white  ${category}`}>
            {category}
          </div>
          <a
            href={prefixURL(href)}
            title={data.title}
            className="block outline-none"
          >
            <div className="outline-none text-3xl py-4 font-semibold text-white lg:w-4/6 lg:text-4xl xl:block xl:max-w-6xl xl:text-4xl font-montserrat trackting-tight">
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

CarouselItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default CarouselItem;
