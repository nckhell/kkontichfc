import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";
import {
  cloudinaryIdLens,
  backgroundPositionLens
} from "../../imports/api/shared/lenses";
import {
  positionLens,
  emailLens,
  shirtNumberLens,
  firstnameLens,
  lastnameLens
} from "../../imports/api/profiles/lenses";

const Profile = props => {
  const { data, type } = props;

  const composeImageUrl = cloudinaryId => {
    if (cloudinaryId) {
      return `https://res.cloudinary.com/kkontichfc/image/upload/t_Profile/${cloudinaryId}`;
    }
    return "https://res.cloudinary.com/kkontichfc/image/upload/v1563609630/no-profile-image_zkkklb.png";
  };

  const imageUrl = composeImageUrl(R.view(cloudinaryIdLens, data));

  return (
    <div className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2">
      <div className="border border-gray-200 border-b-4 block">
        <div
          className="w-full bg-cover relative gradient-b"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            height: "450px",
            backgroundPosition: `${
              R.view(backgroundPositionLens, data)
                ? R.view(backgroundPositionLens, data)
                : "center"
            }`
          }}
        >
          {type === "staff" && (
            <div className="news-category mt-4 ml-6 position">
              {R.view(positionLens, data)}
            </div>
          )}
          {R.view(emailLens, data) && (
            <div className="news-category mt-4 ml-2 position">
              <a
                className="inline-block"
                href={`mailto:${R.view(emailLens, data)}`}
                title={R.view(emailLens, data)}
              >
                <ReactSVG
                  className="inline-block align-middle w-4"
                  beforeInjection={svg => {
                    svg.setAttribute("style", "fill: #FFFFFF");
                  }}
                  src={prefixURL("/static/img/email.svg")}
                />
              </a>
            </div>
          )}
          <div className="flex absolute bottom-0 py-6 px-6 items-center font-montserrat tracking-tight z-50 font-bold">
            {R.view(shirtNumberLens, data) && (
              <div className="text-6xl text-white pr-4 leading-none">
                {R.view(shirtNumberLens, data)}
              </div>
            )}
            <div className="text-3xl text-white leading-tight">
              {R.view(lastnameLens, data)}
              <div className="text-yellow-500">
                {R.view(firstnameLens, data)}
              </div>
            </div>
          </div>
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
