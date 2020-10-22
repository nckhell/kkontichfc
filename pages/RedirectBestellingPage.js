/* eslint-disable global-require */
import React, { Component } from "react";
import "../src/styles/tailwind.css";
import { prefixURL } from "next-prefixed";

class RedirectBestellingPage extends Component {
  state = {};

  componentDidMount() {
    window.location.replace("https://api.kkontichfc.be/pasta-take-away");
  }

  render() {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <img
            src={prefixURL("/static/img/kkontichfc.svg")}
            alt="Koninklijke Kontich Football Club"
            width="125"
            title="Koninklijke Kontich Football Club"
          />
        </div>
      </div>
    );
  }
}

export default RedirectBestellingPage;
