/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Head from "next/head";
import { prefixURL } from "next-prefixed";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu/MenuContent";
import DesktopMenu from "./Menu/DesktopMenu";
import { initGA, logPageView } from "../../utils/analytics";
import "../../styles/tailwind.css";

class Layout extends Component {
  state = {
    isMenuOpen: false,
    isLoading: true
  };

  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

    this.setState({ isLoading: false });
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const { children } = this.props;
    const { isMenuOpen, isLoading } = this.state;

    return (
      <div className={`${isLoading ? "preload" : ""}`}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,400i,600,600i,700,700i&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={prefixURL("/static/img/favicon.ico")}
          />
        </Head>
        <Header isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu} />
        <nav className="relative z-50">
          <div
            id="navigation"
            className={`xl:hidden ${isMenuOpen ? "open" : "closed"}`}
          >
            <Menu />
          </div>
        </nav>
        <DesktopMenu isMenuOpen={isMenuOpen} />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;