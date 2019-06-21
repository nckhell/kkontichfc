import React from "react";
import { Link, prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";
import CarouselSlider from "../src/components/carousel/CarouselSlider";
import Layout from "../src/components/layout/Layout";

function HomePage() {
  return (
    <Layout>
      <CarouselSlider />
      <main>
        <section className="container mx-auto my-20 px-4 md:px-0">
          <h1>Laatste nieuws</h1>
          <div className="mt-6 lg:flex lg:-mx-2">
            <div className="border mb-4 border-gray-200 border-b-4 w-full lg:w-1/3 lg:mx-2">
              <a href="#">
                <div
                  className="w-full h-48 lg:h-56 bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://kkontichfc.be/uploads/img/nieuws/182.jpg')",
                    backgroundPosition: "center"
                  }}
                ></div>
                <div className="news-category akern text-gray-300 pt-8 px-6">
                  A-kern
                </div>
                <div className="text-xl leading-relaxed pt-6 px-6 h-40">
                  Verdediger Jente Hermans speelt volgend seizoen voor KKFC!
                </div>
                <div className="pb-4 px-6 flex text-xs text-gray-600 justify-between">
                  <div>
                    <ReactSVG
                      className="inline-block align-middle pr-2"
                      beforeInjection={svg => {
                        svg.setAttribute("style", "fill: #52606D");
                      }}
                      src={prefixURL("/static/img/clock.svg")}
                    />
                    maandag 21 juli 2019, 15:03
                  </div>
                  <div>
                    <ReactSVG
                      className="inline-block align-middle pr-2"
                      beforeInjection={svg => {
                        svg.setAttribute("style", "fill: #52606D");
                        svg.setAttribute("style", "height: 24px");
                        svg.setAttribute("style", "width: 24px");
                      }}
                      src={prefixURL("/static/img/eye.svg")}
                    />
                    2042x
                  </div>
                </div>
              </a>
            </div>
            <div className="border mb-4 border-gray-200 border-b-4 w-full lg:w-1/3 lg:mx-2">
              <a href="#">
                <div
                  className="w-full h-48 lg:h-56 bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://kkontichfc.be/uploads/img/nieuws/182.jpg')",
                    backgroundPosition: "center"
                  }}
                ></div>
                <div className="news-category akern text-gray-300 pt-8 px-6">
                  A-kern
                </div>
                <div className="text-xl leading-relaxed pt-6 px-6 h-40">
                  Verdediger Jente Hermans speelt volgend seizoen voor KKFC!
                </div>
                <div className="pb-4 px-6 flex text-xs text-gray-600 justify-between">
                  <div>
                    <ReactSVG
                      className="inline-block align-middle pr-2"
                      beforeInjection={svg => {
                        svg.setAttribute("style", "fill: #52606D");
                      }}
                      src={prefixURL("/static/img/clock.svg")}
                    />
                    maandag 21 juli 2019, 15:03
                  </div>
                  <div>
                    <ReactSVG
                      className="inline-block align-middle pr-2"
                      beforeInjection={svg => {
                        svg.setAttribute("style", "fill: #52606D");
                        svg.setAttribute("style", "height: 24px");
                        svg.setAttribute("style", "width: 24px");
                      }}
                      src={prefixURL("/static/img/eye.svg")}
                    />
                    2042x
                  </div>
                </div>
              </a>
            </div>
            <div className="border mb-4 border-gray-200 border-b-4 w-full lg:w-1/3 lg:mx-2">
              <a href="#">
                <div
                  className="w-full h-48 lg:h-56 bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://kkontichfc.be/uploads/img/nieuws/182.jpg')",
                    backgroundPosition: "center"
                  }}
                ></div>
                <div className="news-category akern text-gray-300 pt-8 px-6">
                  A-kern
                </div>
                <div className="text-xl leading-relaxed pt-6 px-6 h-40">
                  Verdediger Jente Hermans speelt volgend seizoen voor KKFC!
                </div>
                <div className="pb-4 px-6 flex text-xs text-gray-600 justify-between">
                  <div>
                    <ReactSVG
                      className="inline-block align-middle pr-2"
                      beforeInjection={svg => {
                        svg.setAttribute("style", "fill: #52606D");
                      }}
                      src={prefixURL("/static/img/clock.svg")}
                    />
                    maandag 21 juli 2019, 15:03
                  </div>
                  <div>
                    <ReactSVG
                      className="inline-block align-middle pr-2"
                      beforeInjection={svg => {
                        svg.setAttribute("style", "fill: #52606D");
                        svg.setAttribute("style", "height: 24px");
                        svg.setAttribute("style", "width: 24px");
                      }}
                      src={prefixURL("/static/img/eye.svg")}
                    />
                    2042x
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="button-w-full text-center mt-8 relative">
            <a href="#" className="btn mx-auto block">Meer nieuws</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
