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
    const bovenbouwTeams = [
      "U21",
      "U17 Rood",
      "U17 Geel",
      "U15 Rood",
      "U15 Geel"
    ];
    const middenbouwTeams = [
      "Dames U13",
      "U13 Rood",
      "U13 Geel",
      "U12",
      "U11 Rood",
      "U10"
    ];
    const onderbouwTeams = [
      "U9 Rood",
      "U9 Geel",
      "U8 Rood",
      "U8 Geel",
      "U7 Rood",
      "U7 Geel",
      "U6"
    ];

    const bovenbouw = _.filter(YouthTeamsList, item => {
      return bovenbouwTeams.includes(item.team);
    });

    const middenbouw = _.filter(YouthTeamsList, item => {
      return middenbouwTeams.includes(item.team);
    });

    const onderbouw = _.filter(YouthTeamsList, item => {
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
              description: "Een overzicht van alle trainers van K. Kontich F.C."
            }
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full mx-auto lg:w-5/6">
              <BreadCrumb
                data={[
                  { title: "info", url: "#" },
                  { title: "trainers", url: "jeugd/trainers" }
                ]}
              />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
            <div className="body-content w-full mx-auto lg:w-5/6">
              <div className="body-content">
                <h1 className="pb-6 inline-block lg:w-4/6">Trainers</h1>
              </div>
              <YouthTeamTrainers title="Bovenbouw" data={bovenbouw} />
              <YouthTeamTrainers title="Middenbouw" data={middenbouw} />
              <YouthTeamTrainers title="Onderbouw" data={onderbouw} />
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
