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

    if (data.cloudinaryID) {
      imageUrl = `http://res.cloudinary.com/kkontichfc/image/upload/v1/teams/2018-2019/${data.cloudinaryID}`;
    } else {
      imageUrl = prefixURL("/static/img/no-news-image.png");
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
            className="w-full h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url('${imageUrl}')`
            }}
          />
          <div className="text-xl leading-relaxed py-6 px-6 no-underline text-gray-900">
            {data.team}
            <span className="text-gray-500 block text-lg">
              {data.coach.name}
            </span>
          </div>
        </a>
      </div>
    );
  }
}

YouthTeam.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  openLightboxWithImage: PropTypes.func.isRequired
};

export default YouthTeam;
