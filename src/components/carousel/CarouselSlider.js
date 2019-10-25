/* eslint-disable prefer-destructuring */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import _ from "lodash";
import CarouselItem from "./CarouselItem";
import CarouselItemReport from "./CarouselItemReport";
import { sortSliderSummaryJsonOnDate, limit } from "../../utils/slider";
import SUMMARY_JSON_NEWS from "../../../content/build/nieuws/summary.json";
import SUMMARY_JSON_REPORTS from "../../../content/build/wedstrijdverslagen/summary.json";

const CarouselSlider = () => {
  const amountOfSliderItems = 3;

  const arrNews = Object.entries(SUMMARY_JSON_NEWS.fileMap).map(elem => {
    const obj = elem[1];
    obj.sourceMap = elem[0];
    obj.typeOf = "NEWS";
    return obj;
  });

  const arrReports = Object.entries(SUMMARY_JSON_REPORTS.fileMap).map(elem => {
    const obj = elem[1];
    obj.sourceMap = elem[0];
    obj.typeOf = "REPORT";
    return obj;
  });

  let sliderNewsList = sortSliderSummaryJsonOnDate(arrNews.concat(arrReports));
  sliderNewsList = limit(
    _.filter(sliderNewsList, item => {
      return item.slider === "YES";
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
      {sliderNewsList &&
        sliderNewsList.map(sliderItem => {
          if (sliderItem.typeOf === "NEWS") {
            return <CarouselItem data={sliderItem} key={sliderItem.base} />;
          }
          return <CarouselItemReport data={sliderItem} key={sliderItem.base} />;
        })}
    </Carousel>
  );
};

export default CarouselSlider;
