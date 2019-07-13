import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";

const ButtonWithLine = props => {
  const { url, text } = props;

  return (
    <div className="button-w-full text-center mt-8 relative">
      <a title={text} href={prefixURL(url)} className="btn mx-auto block">
        {text}
      </a>
    </div>
  );
};

ButtonWithLine.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ButtonWithLine;
