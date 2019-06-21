import React from "react";
import { Link, prefixURL } from "next-prefixed";
import { Carousel } from "react-responsive-carousel";
import ReactSVG from "react-svg";

const CarouselSlider = () => {
  return (
    <Carousel
      emulateTouch
      showArrows={false}
      showStatus={false}
      interval={6000}
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
    >
      <div
        className="w-full h-full bg-cover"
        style={{
          backgroundImage:
            "url('https://kkontichfc.be/uploads/img/nieuws/139-1200x_.jpg?token=cc873450eb77354e5026d35f6747cb29')",
          backgroundPosition: "center"
        }}
      >
        <div className="gradient-wrapper flex items-center">
          <div className="w-5/6 mx-auto text-left">
            <div className="news-category text-white akern">A-kern</div>
            <a href="#" className="block">
              <div className="text-2xl py-4 font-semibold text-white md:text-3xl lg:w-4/6 xl:block xl:max-w-6xl xl:text-5xl">
                <span className="text-yellow-400">Andreas Tindemans:</span>{" "}
                “opnieuw fit na 9 maanden revalidatie, ik heb het voetbal
                gemist.”
              </div>
            </a>
            <div className="text-sm md:text-base font-semibold text-white">
              <ReactSVG
                className="inline-block align-middle pr-2"
                beforeInjection={svg => {
                  svg.setAttribute("style", "fill: #fff");
                }}
                src={prefixURL("/static/img/clock.svg")}
              />
              maandag 21 juli 2019, 15:03
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
