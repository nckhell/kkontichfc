import React, { Component } from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";

class YouthTeam extends Component {
  constructor() {
    super();
    this.onYouthTeamClick = this.onYouthTeamClick.bind(this);
  }

  onYouthTeamClick(imageUrl) {
    const { openLightboxWithImage } = this.props;
    openLightboxWithImage(imageUrl);
  }

  render() {
    const { data } = this.props;

    let imageUrl;
    let thumbnailUrl;

    if (data.cloudinaryID) {
      imageUrl = `https://res.cloudinary.com/kkontichfc/image/upload/c_scale,w_1200,q_100/teams/2024-2025/${data.cloudinaryID}`;
      thumbnailUrl = `https://res.cloudinary.com/kkontichfc/image/upload/c_scale,w_600/teams/2024-2025/${data.cloudinaryID}`;
    } else {
      imageUrl = prefixURL("/static/img/no-news-image.png");
      thumbnailUrl = imageUrl;
    }

    return (
      <div className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2">
        <a
          href={`#${data.team}`}
          title={`Vergroot afbeelding ${data.team}`}
          onClick={() => this.onYouthTeamClick(imageUrl)}
          className="border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md no-underline"
        >
          <div
            className="w-full h-68 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('${thumbnailUrl}')`,
            }}
          >
            <div className="news-category mt-4 ml-6 position">{data.team}</div>
            <div className="flex absolute bottom-0 py-6 px-6 items-center font-montserrat tracking-tight z-50 font-bold">
              <div className="text-3xl text-white leading-tight">
                {data.coach.lastname}
                <div className="text-yellow-500">{data.coach.firstname}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

YouthTeam.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  openLightboxWithImage: PropTypes.func.isRequired,
};

export default YouthTeam;
