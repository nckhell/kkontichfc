import React from "react";
import { heren1eProv } from "../src/config/api/kbvb_graphql";
import calendar from "../src/services/api/calendar";

function Home() {
  calendar(heren1eProv.ranking.url).then(data => {
    console.log(data);
  });
  return <div>Welcome to Next.js!</div>;
}

export default Home;
