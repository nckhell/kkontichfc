import React from "react";
import PropTypes from "prop-types";
import SponsorItem from "./SponsorItem";

const SponsorList = props => {
  const { data } = props;

  return (
    <div className="mt-6 flex -mx-2 flex-wrap mb-6 lg:mb-10">
      {data &&
        data.map((sponsor, key) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <SponsorItem sponsor={sponsor} key={`${sponsor.name}-${key}`} />
          );
        })}
    </div>
  );
};

SponsorList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default SponsorList;
