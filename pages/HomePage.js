import React from "react";
import { FacebookProvider, Page } from "react-facebook";
import CarouselSlider from "../src/components/carousel/CarouselSlider";
import Layout from "../src/components/layout/Layout";
import LatestNews from "../src/components/news/LatestNews";
import ButtonWithLine from "../src/components/buttons/ButtonWithLine";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";
import HighLightedSponsors from "../src/components/sponsors/HighLightedSponsors";
import UpcomingEvents from "../src/components/events/UpcomingEvents";
import MatchCenter from "../src/components/matchcenter/MatchCenter";

function HomePage() {
  return (
    <Layout>
      <CarouselSlider />
      <main>
        <HighLightedSponsors />
        <section className="container my-10 mx-auto px-4 lg:mt-6 lg:mb-16">
          <h1>Laatste nieuws</h1>
          <LatestNews nbrOfItems={3} excludeSliderItems />
          <ButtonWithLine text="Meer nieuws" url="/nieuws/overzicht/" />
        </section>
        <section className="container my-10 mx-auto px-4 lg:my-16">
          <h1 className="leading-none md:leading-tight">
            Match center
            <br />
            <span className="text-base normal-case font-medium md:text-xl">
              Mede mogelijk gemaakt door:{" "}
              <a
                href="https://www.beste-bookmakers.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Beste-Bookmakers"
                className="text-red-500"
              >
                Beste-Bookmakers.com
              </a>
            </span>
          </h1>
          <MatchCenter />
        </section>
        <HeadSponsors />
        <section className="container my-10 mx-auto px-4 lg:my-16">
          <h1>Evenementen</h1>
          <UpcomingEvents />
          <ButtonWithLine text="Alle evenementen" url="/evenementen/" />
        </section>
        <section className="container my-10 mx-auto px-4 lg:my-16">
          <h1>Andere nieuwskanalen</h1>
          <div className="mt-6 md:flex md:-mx-2 flex-wrap">
            <div className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2 text-center">
              <FacebookProvider appId="346435965433483">
                <Page
                  href="https://www.facebook.com/kkontichfc"
                  width={500}
                  showFacepile={false}
                  smallHeader
                  tabs="timeline"
                />
              </FacebookProvider>
            </div>
          </div>
        </section>
      </main>
      <div className="spacer mb-16 md:mb-24"></div>
    </Layout>
  );
}

export default HomePage;
