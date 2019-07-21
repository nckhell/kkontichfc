import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import Layout from "../src/components/layout/Layout";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import BoardList from "../src/components/board/BoardList";
import BoardContent from "../content/bestuur";

// eslint-disable-next-line react/prefer-stateless-function
class BoardPage extends Component {
  render() {
    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: "Bestuur | Info",
            description: `Een overzicht van het bestuur van K. Kontich F.C.`,
            canonical: `https://www.kkontichfc.be/info/bestuur`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: "https://www.kkontichfc.be/info/bestuur",
              title: "Bestuur | Info | K. Kontich F.C.",
              description: "Een overzicht van het bestuur van K. Kontich F.C."
            }
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full mx-auto lg:w-5/6">
              <BreadCrumb
                data={[
                  { title: "info", url: "#" },
                  { title: "bestuur", url: "info/bestuur" }
                ]}
              />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
            <div className="body-content w-full mx-auto lg:w-5/6">
              <div className="body-content">
                <h1 className="pb-6 inline-block lg:w-4/6">Bestuur</h1>
              </div>
              {BoardContent &&
                BoardContent.map(board => {
                  return (
                    <BoardList
                      name={board.name}
                      members={board.members}
                      key={board.name}
                    />
                  );
                })}
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

export default BoardPage;
