import React from "react";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import _ from "lodash";
import sponsors from "../../../content/sponsors";

function HeadSponsors() {
  const headSponsors = _.filter(sponsors, sponsor => {
    return sponsor.headsponsor === "YES";
  });

  return (
    <div className="my-8 lg:my-10 lg:my-20 bg-gray-111 w-full">
      <section className="mx-auto py-2 lg:py-6 xl:py-10 px-4 md:px-16">
        <CloudinaryContext
          className="flex flex-wrap justify-around"
          cloudName="kkontichfc"
        >
          {headSponsors &&
            headSponsors.map(sponsor => {
              return (
                <a
                  href={sponsor.url}
                  title={sponsor.name}
                  className="w-24 md:w-32 mx-4 md:mx-8 lg:mx-10 my-3 lg:my-6 flex"
                  key={sponsor.cloudinaryID}
                >
                  <Image
                    className="mx-auto object-contain"
                    publicId={`sponsors/${sponsor.cloudinaryID}`}
                    alt={sponsor.name}
                  >
                    <Transformation width="180" height="120" crop="fit" />
                  </Image>
                </a>
              );
            })}
        </CloudinaryContext>
      </section>
    </div>
  );
}

export default HeadSponsors;
