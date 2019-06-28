import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

const SponsorItem = props => {
  const { sponsor } = props;

  return (
    <div className="mb-4 px-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ">
      <CloudinaryContext cloudName="kkontichfc">
        <a
          href={prefixURL(sponsor.url)}
          target="_blank"
          rel="noopener noreferrer"
          title={sponsor.name}
          className="border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"
        >
          <div className="w-full h-32 flex bg-cover justify-center items-center text-center py-4">
            {sponsor.cloudinaryID && (
              <Image
                publicId={`sponsors/${sponsor.cloudinaryID}`}
                className="inline-block max-h-full"
              >
                <Transformation width="180" height="120" crop="fit" />
              </Image>
            )}
            {!sponsor.cloudinaryID && (
              <img
                src={prefixURL("/static/img/no-sponsor-image.jpg")}
                width="100"
                className="inline-block max-h-full"
                alt="Geen sponsor afbeelding beschikbaar"
              />
            )}
          </div>
          <div className="text-lg text-center h-24 leading-relaxed py-6 px-6">
            {sponsor.name}
          </div>
        </a>
      </CloudinaryContext>
    </div>
  );
};

SponsorItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sponsor: PropTypes.object.isRequired
};

export default SponsorItem;
