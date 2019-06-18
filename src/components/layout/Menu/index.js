/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import { Link } from "next-prefixed";

import React from "react";

const Menu = () => {
  return (
    <div id="menu" className="bg-white absolute text-gray-500">
      <ul>
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
        <li>
          <Link href="#">
            <a>Heren</a>
          </Link>
          <ul className="submenu">
            <li>
              <Link href="/heren/1e-provinciale">
                <a>1e Provinciale</a>
              </Link>
            </li>
            <li>
              <Link href="/heren/4e-provinciale">
                <a>4e Provinciale</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <a>Dames</a>
          </Link>
          <ul className="submenu">
            <li>
              <Link href="/dames/1e-nationale">
                <a>1e Nationale</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/1e-provinciale">
                <a>1e Provinciale</a>
              </Link>
            </li>
            <li>
              <Link href="/dames/4e-provinciale">
                <a>4e Provinciale</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <a>Jeugd</a>
          </Link>
          <ul className="submenu">
            <li>
              <Link href="/jeugd/paastornooi/">
                <a>Paastornooi</a>
              </Link>
            </li>
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
              <Link href="/jeugd/kalenders/">
                <a>Kalenders</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/Lidgeld/">
                <a>Lidgeld</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/online-registratie/">
                <a>Online registratie</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/mutualiteiten/">
                <a>Mutualiteiten</a>
              </Link>
            </li>
            <li>
              <Link href="/jeugd/ongevallen/">
                <a>Ongevallen</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <a>Info</a>
          </Link>
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
        <li>
          <Link href="#">
            <a>Commercieel</a>
          </Link>
          <ul className="submenu">
            <li>
              <Link href="/commercieel/sponsors/">
                <a>Sponsors</a>
              </Link>
            </li>
            <li>
              <Link href="/commercieel/huur-kantine/">
                <a>Huur kantine</a>
              </Link>
            </li>
            <li>
              <Link href="/commercieel/evenementen/">
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
