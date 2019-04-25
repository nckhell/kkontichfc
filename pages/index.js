import React from "react";
import Layout from "../src/components/layout/Layout";
import newsCategories from "../src/routes/newscategories";

function Home() {
  console.log(newsCategories);
  return <Layout>home page</Layout>;
}

export default Home;
