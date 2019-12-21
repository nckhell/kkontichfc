import React from "react";
import * as R from "ramda";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import Layout from "../src/components/layout/Layout";
import sponsorsJson from "../content/sponsors";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import SponsorList from "../src/components/sponsors/SponsorList";
import { typeLens, nameLens } from "../src/imports/api/sponsors/lenses";

function SponsorsPage() {
  const sponsors = R.sortBy(
    R.compose(
      R.toLower,
      R.view(nameLens)
    ),
    sponsorsJson
  );

  const isTypeOfSponsor = type => sponsor => R.view(typeLens, sponsor) === type;

  const damesSponsors = R.filter(isTypeOfSponsor("DAMESSPONSOR"), sponsors);

  const kantineSponsors = R.filter(isTypeOfSponsor("KANTINESPONSOR"), sponsors);

  const clubSponsors = R.filter(isTypeOfSponsor("CLUBSPONSOR"), sponsors);

  return (
    <Layout showGrassHeader>
      <NextSeo
        config={{
          title: "Sponsors | Commercieel",
          description: `K. Kontich F.C. wil graag al haar sponsors bedanken.`,
          canonical: `https://www.kkontichfc.be/commercieel/sponsors/`,
          openGraph: {
            type: "website",
            locale: "nl_BE",
            url: "https://www.kkontichfc.be/commercieel/sponsors/",
            title: "Sponsors | Commercieel | K. Kontich F.C.",
            description: "K. Kontich F.C. wil graag al haar sponsors bedanken."
          }
        }}
      />
      <div id="kkfc-background-logo">
        <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
          <BreadCrumb
            data={[
              { title: "commercieel", url: "#" },
              { title: "sponsors", url: "commercieel/sponsors" }
            ]}
          />
        </div>
        <section className="container mt-8 md:mt-10 mx-auto px-4">
          <div className="body-content">
            <h1 className="pb-6 inline-block lg:w-4/6">Sponsors</h1>
          </div>
          <h2>Clubsponsors</h2>
          <SponsorList data={clubSponsors} />
          <h2>Kantinesponsors</h2>
          <SponsorList data={kantineSponsors} />
          <h2>Damessponsors</h2>
          <SponsorList data={damesSponsors} />
        </section>
        <img
          className="logo-kkfc-in-background"
          src={prefixURL("/static/img/kkontichfc.svg")}
          alt="K. Kontich F.C."
        />
      </div>
      <div className="spacer mb-16 md:mb-24"></div>
    </Layout>
  );
}

export default SponsorsPage;
