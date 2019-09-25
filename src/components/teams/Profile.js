import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";

const Profile = props => {
  const { data, type } = props;
  let imageUrl;

  if (data.cloudinaryID) {
    imageUrl = `https://res.cloudinary.com/kkontichfc/image/upload/t_Profile/${data.cloudinaryID}`;
  } else {
    imageUrl =
      "https://res.cloudinary.com/kkontichfc/image/upload/v1563609630/no-profile-image_zkkklb.png";
  }

  return (
    <div className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2">
      <div className="border border-gray-200 border-b-4 block">
        <div
          className="w-full bg-cover relative gradient-b"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            height: "450px",
            backgroundPosition: `${
              data.backgroundPosition ? data.backgroundPosition : "center"
            }`
          }}
        >
          {type === "staff" && (
            <div className="news-category mt-4 ml-6 position">
              {data.position}
            </div>
          )}
          {data.email && (
            <div className="news-category mt-4 ml-2 position">
              <a
                className="inline-block"
                href={`mailto:${data.email}`}
                title={data.email}
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
            {data.shirtNumber && (
              <div className="text-6xl text-white pr-4 leading-none">
                {data.shirtNumber}
              </div>
            )}
            <div className="text-3xl text-white leading-tight">
              {data.lastname}
              <div className="text-yellow-500">{data.firstname}</div>
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
