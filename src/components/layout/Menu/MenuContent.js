/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import { Link, prefixURL } from "next-prefixed";
import React from "react";

const Menu = () => {
  return (
    <div id="menu">
      <ul className="main-menu">
        <li className="facebook-link xl:hidden">
          <a
            href="https://www.facebook.com/kkontichfc/"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold"
            target="_blank"
          >
            Volg ons
          </a>
          <img
            src={prefixURL("/static/img/facebook.svg")}
            className="w-6"
            alt="K. Kontich F.C."
          />
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/nieuws/overzicht/">
            <a>Nieuws</a>
          </Link>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
            }}
          >
            Heren
          </a>
          <ul className="submenu">
            <li>
              <Link href="/heren/1e-provinciale/">
                <a>1e Provinciale</a>
              </Link>
            </li>
            <li>
              <Link href="/heren/3e-provinciale/">
                <a>3e Provinciale</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
            }}
          >
            Dames
          </a>
          <ul className="submenu">
            <li>
              <Link href="/dames/1e-nationale/">
                <a>1e Nationale</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/1e-provinciale/">
                <a>1e Provinciale</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/4e-provinciale/">
                <a>4e Provinciale</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
            }}
          >
            Jeugd
          </a>
          <ul className="submenu">
            {/* <li>
              <Link href="/jeugd/paastornooi/">
                <a>Paastornooi</a>
              </Link>
            </li> */}
            <li>
              <Link href="/jeugd/trainingen/">
                <a>Trainingen</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/ploegen/">
                <a>Ploegen</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/trainers/">
                <a>Trainers</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.belgianfootball.be/nl/club/1509/ploegen">
                <a target="_blank">Kalenders</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/lidgeld/">
                <a>Lidgeld</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/online-registratie/">
                <a>Online registratie</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/mutualiteit/">
                <a>Mutualiteit</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/ongevallen/">
                <a>Ongevallen</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
            }}
          >
            Info
          </a>
          <ul className="submenu">
            <li>
              <Link href="/info/geschiedenis/">
                <a>Geschiedenis</a>
              </Link>
            </li>
            <li>
              <Link href="/info/bestuur/">
                <a>Bestuur</a>
              </Link>
            </li>
            <li>
              <Link href="/info/secretariaat/">
                <a>Secretariaat</a>
              </Link>
            </li>
            <li>
              <Link href="/info/weerbericht/">
                <a>Weerbericht</a>
              </Link>
            </li>
            <li>
              <Link href="/info/contact/">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/info/downloads/">
                <a>Downloads</a>
              </Link>
            </li>
            <li>
              <Link href="/info/organigrammen/">
                <a>Organigrammen</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
            }}
          >
            Commercieel
          </a>
          <ul className="submenu">
            <li>
              <Link href="/commercieel/sponsors/">
                <a>Sponsors</a>
              </Link>
            </li>
            <li>
              <Link href="/commercieel/huur-benedenkantine/">
                <a>Huur kantine</a>
              </Link>
            </li>
            <li>
              <Link href="/evenementen/">
                <a>Evenementen</a>
              </Link>
            </li>
            <li>
              <Link href="https://kontich.clubwereld.nl/">
                <a target="_blank">KKFC Webshop</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
