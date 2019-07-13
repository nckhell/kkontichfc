import React from "react";
import { FacebookProvider, Page } from "react-facebook";
import CarouselSlider from "../src/components/carousel/CarouselSlider";
import Layout from "../src/components/layout/Layout";
import LatestNews from "../src/components/news/LatestNews";
import ButtonWithLine from "../src/components/buttons/ButtonWithLine";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";
import UpcomingEvents from "../src/components/events/UpcomingEvents";
import MatchCenter from "../src/components/matchcenter/MatchCenter";

function HomePage() {
  return (
    <Layout>
      <CarouselSlider />
      <main>
        <section className="container my-10 mx-auto px-4 lg:my-16">
          <h1>Laatste nieuws</h1>
          <LatestNews nbrOfItems={3} />
          <ButtonWithLine text="Meer nieuws" url="/nieuws/overzicht/" />
        </section>
        <section className="container my-10 mx-auto px-4 lg:my-16">
          <h1>Match center</h1>
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
            <div className="mb-4 w-full md:w-1/2 lg:w-2/3 md:px-2"></div>
            <div className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2">
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
    </Layout>
  );
}

export default HomePage;
