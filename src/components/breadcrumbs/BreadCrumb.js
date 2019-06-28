import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";

const BreadCrumb = props => {
  const { data } = props;

  return (
    <ul className="text-xs md:text-base leading-loose">
      <li className="inline-block text-gray-500">
        <a
          href={prefixURL("/")}
          title="Home"
          className="hover:text-red-500 hover:underline"
        >
          Home
        </a>
      </li>
      {data &&
        data.map(breadCrumbItem => {
          return (
            <li
              className="inline-block capitalize text-gray-500 slash-before"
              key={breadCrumbItem.title}
            >
              {breadCrumbItem.title}
            </li>
          );
        })}
    </ul>
  );
};

BreadCrumb.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BreadCrumb;
