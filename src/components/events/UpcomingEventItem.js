import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import { makeUrl, getMonthFromDate, getDayFromDate } from "../../utils/events";

const UpcomingEventItem = props => {
  const { data } = props;

  const href = makeUrl(data);
  const day = getDayFromDate(data.date);
  const month = getMonthFromDate(data.date);

  return (
    <div className="mb-4 w-full lg:w-1/3 lg:px-2">
      <a
        href={prefixURL(href)}
        title={data.title}
        className="border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"
      >
        <div className="flex" itemScope itemType="http://schema.org/Event">
          <meta itemProp="startDate" content={data.date} />
          <div className="w-1/4 bg-yellow-200 text-yellow-700 font-semibold text-2xl py-5 flex justify-center items-center flex-col leading-none border-r-2 border-yellow-400">
            <span className="block">{day}</span>
            <span className="block">{month}</span>
          </div>
          <div
            className="w-3/4 flex px-4 lg:px-6 items-center uppercase font-semibold text-gray-900"
            itemProp="name"
          >
            {data.title}
          </div>
        </div>
      </a>
    </div>
  );
};

UpcomingEventItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default UpcomingEventItem;
