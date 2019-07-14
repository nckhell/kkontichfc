import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import Lightbox from "react-image-lightbox";
import NextSeo from "next-seo";
import Layout from "../src/components/layout/Layout";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import YouthTeam from "../src/components/teams/YouthTeam";
import YouthTeamsList from "../content/jeugd";

class YouthTeamsPage extends Component {
  state = {
    isOpen: false,
    imageUrlToShow: ""
  };

  constructor() {
    super();
    this.openLightboxWithImage = this.openLightboxWithImage.bind(this);
  }

  openLightboxWithImage(imageUrl) {
    this.setState({
      isOpen: true,
      imageUrlToShow: imageUrl
    });
  }

  render() {
    const { isOpen, imageUrlToShow } = this.state;

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: "Ploegen | Jeugd",
            description: `Een overzicht van alle jeugdploegen van K. Kontich F.C.`,
            canonical: `https://kkontichfc.be/jeugd/ploegen`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: "https://kkontichfc.be/jeugd/ploegen",
              title: "Ploegen | Jeugd | K. Kontich F.C.",
              description:
                "Een overzicht van alle jeugdploegen van K. Kontich F.C."
            }
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <BreadCrumb
              data={[
                { title: "jeugd", url: "jeugd" },
                { title: "ploegen", url: "ploegen" }
              ]}
            />
          </div>
          <section className="container mt-8 md:mt-10 mx-auto px-4">
            <h1 className="leading-snug font-normal text-5xl normal-case pb-6 inline-block lg:w-4/6">
              Ploegen
            </h1>
            <div className="mt-6 mb-6 md:flex md:-mx-2 flex-wrap">
              {YouthTeamsList &&
                YouthTeamsList.map(team => {
                  return (
                    <YouthTeam
                      data={team}
                      key={team.team}
                      openLightboxWithImage={this.openLightboxWithImage}
                    />
                  );
                })}
            </div>
          </section>
          <img
            className="logo-kkfc-in-background"
            src={prefixURL("/static/img/kkontichfc.svg")}
            alt="K. Kontich F.C."
          />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={imageUrlToShow}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </Layout>
    );
  }
}

export default YouthTeamsPage;
