import React from "react";
import * as R from "ramda";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import _ from "lodash";
import sponsors from "../../../content/sponsors";
import {
  nameLens,
  urlLens,
  headsponsorLens
} from "../../imports/api/sponsors/lenses";
import { cloudinaryIdLens } from "../../imports/api/shared/lenses";

function HeadSponsors() {
  const isHeadsponsor = sponsor => R.view(headsponsorLens, sponsor) === "YES";

  const headSponsors = R.compose(
    R.filter(isHeadsponsor),
    R.sortBy(
      R.compose(
        R.toLower,
        R.view(nameLens)
      )
    )
  )(sponsors);

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
                  href={R.view(urlLens, sponsor)}
                  title={R.view(nameLens, sponsor)}
                  className="w-24 md:w-32 mx-4 md:mx-8 lg:mx-10 my-3 lg:my-6 flex"
                  key={R.view(cloudinaryIdLens, sponsor)}
                >
                  <Image
                    className="mx-auto object-contain"
                    publicId={`sponsors/${R.view(cloudinaryIdLens, sponsor)}`}
                    alt={R.view(nameLens, sponsor)}
                    secure
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
