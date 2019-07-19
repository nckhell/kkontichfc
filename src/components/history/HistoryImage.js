import React from "react";
import PropTypes from "prop-types";

const HistoryImage = props => {
  const { url } = props;

  return (
    <div
      className="w-full h-64 md:h-48 xl:h-68 md:w-1/5 bg-red-500 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('${url}')`
      }}
    ></div>
  );
};

HistoryImage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  url: PropTypes.string.isRequired
};

export default HistoryImage;
