import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";

const BreadCrumb = props => {
  const { data } = props;
  let position = 1;

  return (
    <ol
      className="text-xs md:text-base leading-loose"
      itemScope
      itemType="http://schema.org/BreadcrumbList"
    >
      <li
        className="inline-block text-gray-500"
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <a
          href={prefixURL("/")}
          itemProp="item"
          title="Home"
          className="hover:text-red-500 hover:underline"
        >
          <span itemProp="name">Home</span>
        </a>
        <meta itemProp="position" content="1" />
      </li>
      {data &&
        data.map(breadCrumbItem => {
          position += 1;
          return (
            <li
              className="inline-block capitalize text-gray-500 slash-before"
              key={breadCrumbItem.title}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <span itemProp="item">{breadCrumbItem.title}</span>
              <meta itemProp="position" content={position} />
            </li>
          );
        })}
    </ol>
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
