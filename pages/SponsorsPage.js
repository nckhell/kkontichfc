import React from "react";
import _ from "lodash";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import Layout from "../src/components/layout/Layout";
import sponsorsJson from "../content/sponsors";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import SponsorList from "../src/components/sponsors/SponsorList";

function SponsorsPage() {
  const sponsors = _.orderBy(sponsorsJson, "name", "asc");

  const damesSponsors = _.filter(sponsors, sponsor => {
    return sponsor.type === "DAMESSPONSOR";
  });
  const kantineSponsors = _.filter(sponsors, sponsor => {
    return sponsor.type === "KANTINESPONSOR";
  });
  const clubSponsors = _.filter(sponsors, sponsor => {
    return sponsor.type === "CLUBSPONSOR";
  });

  return (
    <Layout showGrassHeader>
      <NextSeo
        config={{
          title: "Sponsors | Commercieel",
          description: `K. Kontich F.C. wil graag al haar sponsors bedanken.`,
          canonical: `https://www.kkontichfc.be/commercieel/sponsors`,
          openGraph: {
            type: "website",
            locale: "nl_BE",
            url: "https://www.kkontichfc.be/commercieel/sponsors",
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
