import React from "react";
import { prefixURL } from "next-prefixed";

const ButtonWithLine = props => {
  const { url, text } = props;

  return (
    <div className="button-w-full text-center mt-8 relative">
      <a href={prefixURL(url)} className="btn mx-auto block">
        {text}
      </a>
    </div>
  );
};

export default ButtonWithLine;