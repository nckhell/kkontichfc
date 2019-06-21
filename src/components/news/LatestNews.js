import React from "react";
import { Link, prefixURL } from "next-prefixed";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import ReactSVG from "react-svg";
import NewsItem from "./NewsItem";

const LatestNews = (props) => {
  return (
    <div className="mt-6 lg:flex lg:-mx-2">
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
}

export default LatestNews;
