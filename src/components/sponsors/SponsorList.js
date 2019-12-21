import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import SponsorItem from "./SponsorItem";
import { nameLens } from "../../imports/api/sponsors/lenses";

const SponsorList = props => {
  const { data } = props;

  return (
    <div className="mt-6 flex -mx-2 flex-wrap mb-6 lg:mb-10">
      {data &&
        data.map((sponsor, key) => {
          return (
            <SponsorItem
              sponsor={sponsor}
              // eslint-disable-next-line react/no-array-index-key
              key={`${R.view(nameLens, sponsor)}-${key}`}
            />
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
