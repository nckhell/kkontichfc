import React from "react";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import _ from "lodash";
import Layout from "../src/components/layout/Layout";
import sponsors from "../content/sponsors";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";

function SponsorsPage() {
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
    <Layout>
      <CloudinaryContext cloudName="kkontichfc">
        <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
          <BreadCrumb
            data={[
              { title: "commercieel", url: "commercieel" },
              { title: "sponsors", url: "sponsors" }
            ]}
          />
        </div>
        <section className="container mt-8 md:mt-10 mx-auto px-4">
          <h1>Sponsors</h1>
          {clubSponsors &&
            clubSponsors.map(sponsor => {
              if (sponsor.cloudinaryID) {
                return (
                  <div key={sponsor.cloudinaryID}>
                    <p>{sponsor.name}</p>
                    <Image publicId={`sponsors/${sponsor.cloudinaryID}`}>
                      <Transformation width="180" height="120" crop="fit" />
                    </Image>
                  </div>
                );
              }
              return (
                <div key={sponsor.name}>
                  <p>{sponsor.name}</p>
                </div>
              );
            })}
          <h1>Damessponsors</h1>
          {damesSponsors &&
            damesSponsors.map(sponsor => {
              if (sponsor.cloudinaryID) {
                return (
                  <div key={sponsor.cloudinaryID}>
                    <p>{sponsor.name}</p>
                    <Image publicId={`sponsors/${sponsor.cloudinaryID}`}>
                      <Transformation width="180" height="120" crop="fit" />
                    </Image>
                  </div>
                );
              }
              return (
                <div key={sponsor.name}>
                  <p>{sponsor.name}</p>
                </div>
              );
            })}
          <h1>Kantinesponsors</h1>
          {kantineSponsors &&
            kantineSponsors.map(sponsor => {
              if (sponsor.cloudinaryID) {
                return (
                  <div key={sponsor.cloudinaryID}>
                    <p>{sponsor.name}</p>
                    <Image publicId={`sponsors/${sponsor.cloudinaryID}`}>
                      <Transformation width="180" height="120" crop="fit" />
                    </Image>
                  </div>
                );
              }
              return (
                <div key={sponsor.name}>
                  <p>{sponsor.name}</p>
                </div>
              );
            })}
        </section>
      </CloudinaryContext>
    </Layout>
  );
}

export default SponsorsPage;
