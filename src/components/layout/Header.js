/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, prefixURL } from "next-prefixed";
import PropTypes from "prop-types";

class Header extends Component {
  constructor() {
    super();
    this.onHamburgerClick = this.onHamburgerClick.bind(this);
  }

  onHamburgerClick(e) {
    e.preventDefault();
    const { toggleMenu } = this.props;
    toggleMenu();
  }

  render() {
    const { isMenuOpen } = this.props;

    return (
      <header className="z-20">
        <div className="flex flex-row justify-between items-center px-4 py-6 border-b border-gray-200 sm:px-6 md:py-16 md:px-8 xl:px-16">
          <div className="relative z-500">
            <button
              onClick={this.onHamburgerClick}
              className={`hamburger hamburger--squeeze ${
                isMenuOpen ? "is-active" : ""
              }`}
              type="button"
              aria-label="Menu"
              aria-controls="navigation"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
              <span className="hamburger-label">Menu</span>
            </button>
          </div>
          <div className="logo">
            <Link href="/">
              <a>
                <img
                  className="w-8 md:w-16 lg:w-18"
                  src={prefixURL("/static/img/kkontichfc.svg")}
                  alt="K. Kontich F.C."
                />
                <h1 className="hidden">K. Kontich F.C.</h1>
              </a>
            </Link>
          </div>
          <div className="hidden xl:block">
            <ul className="font-semibold text-gray-900 uppercase">
              <li className="inline-block pr-12">
                <Link href="/nieuws/overzicht/">
                  <a>Nieuws</a>
                </Link>
              </li>
              <li className="inline-block pr-12">
                <Link href="https://kontich.clubwereld.nl/">
                  <a target="_blank">KKFC Webshop</a>
                </Link>
              </li>
              <li className="inline-block">
                <Link href="/commercieel/sponsors/">
                  <a>Sponsors</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default Header;
