import React from "react";
import { Link, prefixURL } from "next-prefixed";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import _ from "lodash";
import ReactSVG from "react-svg";
import CarouselSlider from "../src/components/carousel/CarouselSlider";
import Layout from "../src/components/layout/Layout";
import LatestNews from "../src/components/news/LatestNews";
import ButtonWithLine from "../src/components/buttons/ButtonWithLine";
import sponsors from "../content/sponsors";

function HomePage() {
  const headSponsors = _.filter(sponsors, sponsor => {
    return sponsor.headsponsor === "YES";
  });

  return (
    <Layout>
      <CarouselSlider />
      <main>
        <section className="container my-10 mx-auto px-4 md:px-0 lg:my-16">
          <h1>Laatste nieuws</h1>
          <LatestNews />
          <ButtonWithLine text="Meer nieuws" url="#" />
        </section>
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
                      className="w-24 md:w-32 mx-4 md:mx-8 lg:mx-10 my-3 lg:my-6 flex"
                      key={sponsor.cloudinaryID}
                    >
                      <Image
                        className="mx-auto object-contain"
                        publicId={`sponsors/${sponsor.cloudinaryID}`}
                      >
                        <Transformation width="180" height="120" crop="fit" />
                      </Image>
                    </a>
                  );
                })}
            </CloudinaryContext>
          </section>
        </div>
        <section className="container my-10 mx-auto px-4 md:px-0 lg:my-16">
          <h1>Evenementen</h1>
          <ButtonWithLine text="Alle evenementen" url="#" />
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
