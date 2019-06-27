import React from "react";
import CarouselSlider from "../src/components/carousel/CarouselSlider";
import Layout from "../src/components/layout/Layout";
import LatestNews from "../src/components/news/LatestNews";
import ButtonWithLine from "../src/components/buttons/ButtonWithLine";
import HeadSponsors from "../src/components/sponsors/HeadSponsors";
import UpcomingEvents from "../src/components/events/UpcomingEvents";

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
        <HeadSponsors />
        <section className="container my-10 mx-auto px-4 lg:my-16">
          <h1>Evenementen</h1>
          <UpcomingEvents />
          <ButtonWithLine text="Alle evenementen" url="/evenementen/" />
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
