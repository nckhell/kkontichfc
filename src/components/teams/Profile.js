import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";

const Profile = props => {
  const { data, type } = props;

  console.log(data);

  let imageUrl;

  if (data.cloudinaryID) {
    imageUrl = `http://res.cloudinary.com/kkontichfc/image/upload/v1/${type}/${data.cloudinaryID}`;
  } else {
    imageUrl = prefixURL("/static/img/no-news-image.png");
  }

  return (
    <div className="mb-4 w-full lg:w-1/3 lg:px-2">
      <div className="border border-gray-200 border-b-4 block">
        <div
          className="w-full h-64 bg-cover"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundPosition: `${
              data.backgroundPosition ? data.backgroundPosition : "center"
            }`
          }}
        />
        <div className="text-xl leading-relaxed py-6 px-6">
          {data.name}
          {type === "staff" && (
            <span className="text-gray-500 block text-lg">{data.position}</span>
          )}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default Profile;
