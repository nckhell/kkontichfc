/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, prefixURL } from "next-prefixed";
import PropTypes from "prop-types";

class Header extends Component {
  state = {
    fading: false,
    msg: "Quam parva nulli cedo"
  };

  constructor() {
    super();
    this.onHamburgerClick = this.onHamburgerClick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { msg } = this.state;
      const messageToDisplay =
        msg === "Quam parva nulli cedo"
          ? "Al ben ik klein, ik wijk voor niets"
          : "Quam parva nulli cedo";
      this.setState({ msg: messageToDisplay });
      this.setState({ fading: false });
    }, 5000);
  }

  onHamburgerClick(e) {
    e.preventDefault();
    const { toggleMenu } = this.props;
    toggleMenu();
  }

  render() {
    const { isMenuOpen } = this.props;
    const { fading, msg } = this.state;

    return (
      <header className="bg-white">
        <div className="flex flex-row justify-between items-center px-4 py-12 border-b border-gray-200 sm:px-6 md:py-16 md:px-8 xl:px-16">
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
          <div className="logo text-center">
            <Link href="/">
              <a
                title="Koninkijke Kontich Football Club"
                className="flex items-center flex-col"
              >
                <img
                  className="w-8 md:w-12 lg:w-18"
                  src={prefixURL("/static/img/kkontichfc.svg")}
                  alt="Koninklijke Kontich Football Club"
                  title="Koninklijke Kontich Football Club"
                />
                <h1 className="pt-2 text-sm leading-tight lg:text-base">
                  K. Kontich F.C.
                  <br />
                  <span className="text-xs md:text-base normal-case font-normal italic text-gray-600 text-animate">
                    {msg}
                  </span>
                </h1>
              </a>
            </Link>
          </div>
          <div className="hidden xl:block">
            <ul className="font-semibold text-gray-900 uppercase font-montserrat tracking-tight">
              <li className="inline-block pr-10">
                <Link href="/nieuws/">
                  <a title="Nieuws" className="hover:text-yellow-500">
                    Nieuws
                  </a>
                </Link>
              </li>
              <li className="inline-block pr-10">
                <a
                  title="KKFC Webshop"
                  href="https://kontich.clubwereld.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500"
                >
                  KKFC Webshop
                </a>
              </li>
              <li className="inline-block">
                <Link href="/commercieel/sponsors/">
                  <a title="Sponsors" className="hover:text-yellow-500">
                    Sponsors
                  </a>
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
