import React from "react";
import { Link, prefixURL } from "next-prefixed";
import Layout from "../src/components/layout/Layout";

function HomePage() {
  return (
    <Layout>
      <div className="absolute flex h-full w-fill inset-0">
        <div className="flex items-center justify-center bg-red-500 w-5/12 border-r-8 border-yellow-400">
          <div className="w-full text-center">
            <img
              className="w-3/12 mx-auto"
              src={prefixURL("/static/img/kkontichfc.svg")}
              alt="K. Kontich F.C."
            />
            <h2
              id="quote"
              className="pt-4 leading-tight font-semibold text-2xl text-red-800"
            >
              {" "}
              Quam parva nulli cedo <br />
              <span className="font-normal italic text-xl">
                Al ben ik klein, ik wijk voor niets
              </span>
            </h2>
          </div>
        </div>
        <div className="bg-white w-7/12"></div>
      </div>
    </Layout>
  );
}

export default HomePage;
