/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import { Link, prefixURL } from "next-prefixed";
import React from "react";

const Menu = () => {
  return (
    <div id="menu">
      <ul className="main-menu font-montserrat tracking-tight">
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
        <li>
          <a
            title="ProSoccerData"
            href="https://kkontichfc.prosoccerdata.com/signup.php?q=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            ProSoccerData
          </a>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={(e) => {
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
              <Link href="/heren/4e-provinciale/">
                <a title="Heren 4e Provinciale">4e Provinciale</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            title="Dames"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Dames
          </a>
          <ul className="submenu">
            <li>
              <Link href="/dames/talentdagen/">
                <a title="Talentdagen">Talentdagen</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/interprovinciale-b/">
                <a title="Dames interprovinciale B">Interprovinciale B</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/1e-provinciale/">
                <a title="Dames 1e pronviciale">1e Provinciale</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/2e-provinciale/">
                <a title="Dames 2e provinciale">2e Provinciale</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
            title="Jeugd"
          >
            Jeugd
          </a>
          <ul className="submenu">
            <li>
              <Link href="/jeugd/vermant-cup/">
                <a>Vermant-Cup</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/ploegen/">
                <a title="Ploegen">Ploegen</a>
              </Link>
            </li>
            <li>
              <a
                title="Kalenders"
                target="_blank"
                href="https://www.belgianfootball.be/nl/club/1509/ploegen"
                rel="noopener noreferrer"
              >
                Kalenders
              </a>
            </li>
            <li>
              <a
                title="Online registratie"
                href="https://forms.gle/5q5Nn2paueNb1S5w7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online registratie
              </a>
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
            <li>
              <Link href="/jeugd/blessures/">
                <a title="Blessures">Blessures</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/ombudsdienst/">
                <a title="Ombudsdienst">Ombudsdienst</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/gezondheidspreventie/">
                <a title="Gezondheidspreventie">Gezondheidspreventie</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/mentaal-welzijn/">
                <a title="Mentaal welzijn">Mentaal welzijn</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a
            href="#"
            onClick={(e) => {
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
              <Link href="/info/clublied/">
                <a title="Clublied">Clublied</a>
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
                <a title="Contact">Contact & ligging</a>
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
            onClick={(e) => {
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
          </ul>
        </li>
        <li className="facebook hidden xl:block">
          <a
            href="https://www.facebook.com/kkontichfc/"
            rel="noopener noreferrer"
            title="Volg K. Kontich F.C. op Facebook"
            className="text-blue-700 font-semibold inline-block hover:underline"
            target="_blank"
          >
            <img
              src={prefixURL("/static/img/facebook.svg")}
              className="w-8 inline-block pr-2"
              alt="K. Kontich F.C."
            />
            Volg ons op facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
