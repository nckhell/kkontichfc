import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import { makeUrl, getMonthFromDate, getDayFromDate } from "../../utils/events";

const EventItem = props => {
  const { data } = props;

  const href = makeUrl(data);
  const day = getDayFromDate(data.date);
  const month = getMonthFromDate(data.date);
  let imageUrl;

  if (data.cloudinaryID) {
    imageUrl = `http://res.cloudinary.com/kkontichfc/image/upload/v1/evenementen/${data.cloudinaryID}`;
  } else {
    imageUrl = prefixURL("/static/img/no-news-image.png");
  }

  return (
    <article className="mb-4 w-full lg:w-1/3 lg:px-2">
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
        <div className="flex">
          <div className="w-1/4 bg-yellow-200 text-yellow-700 font-semibold text-2xl py-5 flex justify-center items-center flex-col leading-none border-r-2 border-yellow-400">
            <span className="block">{day}</span>
            <span className="block">{month}</span>
          </div>
          <div className="w-3/4 flex px-4 lg:px-6 items-center uppercase font-semibold text-gray-900">
            {data.title}
          </div>
        </div>
      </a>
    </article>
  );
};

EventItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default EventItem;
