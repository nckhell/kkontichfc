import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import Menu from "./MenuContent";

const DesktopMenu = props => {
  const { isMenuOpen } = props;
  return (
    <div
      id="full-page-nav-wrapper"
      className={`absolute h-full w-fill inset-0 hidden xl:flex ${
        isMenuOpen ? "open" : "closed"
      }`}
    >
      <div className="flex items-center justify-center bg-red-500 w-5/12 border-r-8 border-yellow-400">
        <div className="w-full text-center">
          <img
            className="w-3/12 mx-auto"
            src={prefixURL("/static/img/kkontichfc.svg")}
            alt="K. Kontich F.C."
          />
          <h2
            id="quote"
            className="pt-4 leading-tight font-semibold text-2xl text-red-800 font-montserrat tracking-tight;"
          >
            {" "}
            Quam parva nulli cedo <br />
            <span className="font-normal italic text-xl">
              Al ben ik klein, ik wijk voor niets
            </span>
          </h2>
        </div>
      </div>
      <div className="bg-white w-7/12 flex justify-center items-center relative">
        <div
          id="desktop-menu"
          className="w-full flex justify-center items-center"
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

DesktopMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired
};

export default DesktopMenu;
