import React from "react";
import { Link, prefixURL } from "next-prefixed";
import CarouselSlider from "../src/components/carousel/CarouselSlider";
import Layout from "../src/components/layout/Layout";

function HomePage() {
  return (
    <Layout>
      <CarouselSlider />
    </Layout>
  );
}

export default HomePage;
