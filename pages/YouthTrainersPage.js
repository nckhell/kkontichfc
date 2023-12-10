/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import _ from "lodash";
import NextSeo from "next-seo";
import { FacebookProvider, Like } from "react-facebook";
import Layout from "../src/components/layout/Layout";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import YouthTeamTrainers from "../src/components/youth/YouthTeamTrainers";
import YouthTeamsList from "../content/jeugd";

// eslint-disable-next-line react/prefer-stateless-function
class YouthTrainersPage extends Component {
  render() {
    const bovenbouwTeams = ["U21", "U17 A", "U17 B", "Dames U16", "U15"];

    const middenbouwTeams = ["Dames U13", "U13 A", "U13 B", "U12", "U10"];

    const onderbouwTeams = ["U9 A", "U9 B", "U8 A", "U7", "U6 A", "U6 B"];

    const bovenbouw = _.filter(YouthTeamsList, (item) => {
      return bovenbouwTeams.includes(item.team);
    });

    const middenbouw = _.filter(YouthTeamsList, (item) => {
      return middenbouwTeams.includes(item.team);
    });

    const onderbouw = _.filter(YouthTeamsList, (item) => {
      return onderbouwTeams.includes(item.team);
    });

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: "Trainers | Jeugd",
            description: `Een overzicht van alle trainers van K. Kontich F.C.`,
            canonical: `https://www.kkontichfc.be/jeugd/trainers/`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: "https://kkontichfc.be/jeugd/ploegen",
              title: "Trainers | Jeugd | K. Kontich F.C.",
              description:
                "Een overzicht van alle trainers van K. Kontich F.C.",
            },
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full mx-auto lg:w-5/6">
              <BreadCrumb
                data={[
                  { title: "info", url: "#" },
                  { title: "trainers", url: "jeugd/trainers" },
                ]}
              />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
            <div className="body-content w-full mx-auto lg:w-5/6">
              <div className="body-content">
                <h1 className="pb-6 inline-block lg:w-4/6">Trainers</h1>
              </div>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download Cluborganigram"
                  href="https://res.cloudinary.com/kkontichfc/raw/upload/v1613315117/downloads/cluborganigram_iddrb0.xlsx"
                >
                  Klik hier om het volledige cluborganigram te bekijken.
                </a>
              </p>
              <YouthTeamTrainers
                title="Bovenbouw"
                coordinator="Kris Mampaey"
                coordinatorEmail="kris.liliane@skynet.be"
                data={bovenbouw}
              />
              <YouthTeamTrainers
                title="Middenbouw"
                coordinator="Sven Eeraerts"
                coordinatorEmail="sven.eeeraerts@telenet.be"
                data={middenbouw}
              />
              <YouthTeamTrainers
                title="Onderbouw"
                coordinator="Mike Stevens"
                data={onderbouw}
              />
              <FacebookProvider appId="346435965433483">
                <div className="my-6">
                  <Like
                    href="https://www.kkontichfc.be/jeugd/trainers/"
                    colorScheme="dark"
                    size="large"
                    showFaces
                    share
                  />
                </div>
              </FacebookProvider>
            </div>
            <img
              className="logo-kkfc-in-background"
              src={prefixURL("/static/img/kkontichfc.svg")}
              alt="K. Kontich F.C."
            />
          </div>
        </div>
        <div className="spacer mb-16 md:mb-24"></div>
      </Layout>
    );
  }
}

export default YouthTrainersPage;
