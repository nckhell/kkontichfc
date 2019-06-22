import React from "react";
import { Carousel } from "react-responsive-carousel";
import _ from "lodash";
import CarouselItem from "./CarouselItem";
import { sortNewsSummaryJsonOnDate, limit } from "../../utils/news";
import SUMMARY_JSON from "../../../content/build/nieuws/summary.json";

const CarouselSlider = () => {
  const amountOfSliderItems = 4;

  let sliderNewsList = sortNewsSummaryJsonOnDate(SUMMARY_JSON);
  sliderNewsList = limit(
    _.filter(sliderNewsList, newsItem => {
      return newsItem.slider === "YES";
    }),
    amountOfSliderItems
  );

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
      {sliderNewsList.map(sliderItem => {
        return <CarouselItem data={sliderItem} key={sliderItem.base} />;
      })}
    </Carousel>
  );
};

export default CarouselSlider;
