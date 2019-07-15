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
            title="Volg K. Kontich F.C. op Facebook"
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
            <a title="Home">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/nieuws/overzicht/">
            <a title="Nieuws">Nieuws</a>
          </Link>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
            }}
            title="Heren"
          >
            Heren
          </a>
          <ul className="submenu">
            <li>
              <Link href="/heren/1e-provinciale/">
                <a title="Heren 1e Provinciale">1e Provinciale</a>
              </Link>
            </li>
            <li>
              <Link href="/heren/3e-provinciale/">
                <a title="Heren 3e Provinciale">3e Provinciale</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            title="Dames"
            onClick={e => {
              e.preventDefault();
            }}
          >
            Dames
          </a>
          <ul className="submenu">
            <li>
              <Link href="/dames/1e-nationale/">
                <a title="Dames 1e nationale">1e Nationale</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/1e-provinciale/">
                <a title="Dames 1e pronviciale">1e Provinciale</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/3e-provinciale/">
                <a title="Dames 3e provinciale">3e Provinciale</a>
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
            title="Jeugd"
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
                <a title="Trainingen">Trainingen</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/ploegen/">
                <a title="Ploegen">Ploegen</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/trainers/">
                <a title="Trainers">Trainers</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.belgianfootball.be/nl/club/1509/ploegen">
                <a title="Kalenders" target="_blank">
                  Kalenders
                </a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/lidgeld/">
                <a title="Lidgeld">Lidgeld</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/online-registratie/">
                <a title="Online registratie">Online registratie</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/mutualiteit/">
                <a title="Mutualiteit">Mutualiteit</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/ongevallen/">
                <a title="Ongevallen">Ongevallen</a>
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
            title="Info"
          >
            Info
          </a>
          <ul className="submenu">
            <li>
              <Link href="/info/geschiedenis/">
                <a title="Geschiedenis">Geschiedenis</a>
              </Link>
            </li>
            <li>
              <Link href="/info/bestuur/">
                <a title="Bestuur">Bestuur</a>
              </Link>
            </li>
            <li>
              <Link href="/info/secretariaat/">
                <a title="Secretariaat">Secretariaat</a>
              </Link>
            </li>
            <li>
              <Link href="/info/weerbericht/">
                <a title="Weerbericht">Weerbericht</a>
              </Link>
            </li>
            <li>
              <Link href="/info/contact/">
                <a title="Contact">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/info/downloads/">
                <a title="Downloads">Downloads</a>
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
            title="Commercieel"
          >
            Commercieel
          </a>
          <ul className="submenu">
            <li>
              <Link href="/commercieel/sponsors/">
                <a title="Sponsors">Sponsors</a>
              </Link>
            </li>
            <li>
              <Link href="/commercieel/huur-benedenkantine/">
                <a title="Huur kantine">Huur kantine</a>
              </Link>
            </li>
            <li>
              <Link href="/evenementen/">
                <a title="Evenementen">Evenementen</a>
              </Link>
            </li>
            <li>
              <Link href="https://kontich.clubwereld.nl/">
                <a title="KKFC Webshop" target="_blank">
                  KKFC Webshop
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
