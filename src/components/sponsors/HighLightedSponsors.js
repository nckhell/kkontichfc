import React from "react";
import * as R from "ramda";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import sponsors from "../../../content/sponsors";
import {
  nameLens,
  urlLens,
  highLightLens
} from "../../imports/api/sponsors/lenses";
import { getRandomSponsors, shuffle } from "../../utils/sponsors";
import { cloudinaryIdLens } from "../../imports/api/shared/lenses";

const HighLightedSponsors = () => {
  const AMOUNT_OF_SPONSORS_TO_HIGHLIGHT = 3;

  const isHighLigtedSponsor = sponsor =>
    R.equals(R.view(highLightLens, sponsor), true);

  const sponsorHasImage = sponsor =>
    !R.isNil(R.view(cloudinaryIdLens, sponsor));

  const sponsorsThatAreHighlighted = R.compose(
    R.take(AMOUNT_OF_SPONSORS_TO_HIGHLIGHT),
    R.filter(isHighLigtedSponsor),
    R.sortBy(
      R.compose(
        R.toLower,
        R.view(nameLens)
      )
    )
  )(sponsors);

  const AMOUNT_OF_RANDOM_SPONSORS =
    AMOUNT_OF_SPONSORS_TO_HIGHLIGHT - sponsorsThatAreHighlighted.length;

  const randomSponsors = getRandomSponsors(
    R.filter(sponsorHasImage, sponsors),
    AMOUNT_OF_RANDOM_SPONSORS
  );

  const highlightedSponsors = R.compose(
    shuffle,
    R.flatten,
    R.append(randomSponsors)
  )(sponsorsThatAreHighlighted);

  return (
    <div className="mt-6 md:flex md:-mx-2 flex-wrap justify-center text-center flex-col items-center">
      <div className="mb-2">
        <p>
          <b>Met dank aan:</b>
        </p>
      </div>
      <CloudinaryContext
        className="flex flex-wrap justify-around"
        cloudName="kkontichfc"
      >
        {highlightedSponsors &&
          highlightedSponsors.map(sponsor => {
            return (
              <a
                href={R.view(urlLens, sponsor)}
                title={R.view(nameLens, sponsor)}
                className="w-24 md:w-32 mx-4 md:mx-8 lg:mx-10 flex"
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
    </div>
  );
};

export default HighLightedSponsors;
