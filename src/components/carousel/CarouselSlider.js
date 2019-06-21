import React from "react";
import { Carousel } from "react-responsive-carousel";

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
        <div className="legend flex justify-start items-center">
          <div className="news-category akern">A-kern</div>
          <a href="#" className="block">
            <h1 className="text-5xl font-semibold text-white shadow">
              Andreas Tindemans: “opnieuw fit na 9 maanden revalidatie, ik heb
              het voetbal gemist.”
            </h1>
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
