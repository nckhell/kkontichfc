/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, prefixURL } from "next-prefixed";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 border-t border-gray-200">
      <div className="container py-8 md:py-16 px-4 mx-auto flex flex-col text-gray-500">
        <div className="flex flex-col md:flex-row md:mb-16">
          <div className="md:w-1/4 flex flex-col mb-8 md:mb-0">
            <h4 className="text-base pb-4 text-gray-800">Eerste elftallen</h4>
            <Link href="/heren/1e-provinciale/">
              <a
                title="Heren 1e Provinciale"
                className="text-sm text-gray-500 py-1"
              >
                Heren 1e Prov.
              </a>
            </Link>
            <Link href="/heren/3e-provinciale/">
              <a
                title="Heren 3e Provinciale"
                className="text-sm text-gray-500 py-1"
              >
                Heren 3e Prov.
              </a>
            </Link>
            <Link href="/dames/1e-nationale/">
              <a
                title="Dames 1e Nationale"
                className="text-sm text-gray-500 py-1"
              >
                Dames 1e Nat.
              </a>
            </Link>
            <Link href="/dames/1e-provinciale/">
              <a
                title="Dames 1e Provinciale"
                className="text-sm text-gray-500 py-1"
              >
                Dames 1e Prov.
              </a>
            </Link>
            <Link href="/dames/3e-provinciale/">
              <a
                title="Dames 3e Provinciale"
                className="text-sm text-gray-500 py-1"
              >
                Dames 3e Prov.
              </a>
            </Link>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="text-base pb-4 text-gray-800">Jeugd</h4>
            <Link href="/jeugd/trainingen">
              <a title="Trainingen" className="text-sm text-gray-500 py-1">
                Trainingen
              </a>
            </Link>
            <Link href="/jeugd/ploegen/">
              <a title="Ploegen" className="text-sm text-gray-500 py-1">
                Ploegen
              </a>
            </Link>
            <Link href="/jeugd/trainers/">
              <a title="Trainers" className="text-sm text-gray-500 py-1">
                Trainers
              </a>
            </Link>
            <Link href="/jeugd/paastornooi/">
              <a title="Paastornooi" className="text-sm text-gray-500 py-1">
                Paastornooi
              </a>
            </Link>
            <a
              title="Kalenders"
              href="https://www.belgianfootball.be/nl/club/1509/ploegen"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm text-gray-500 py-1"
            >
              Kalenders
            </a>
            <Link href="/jeugd/lidgeld/">
              <a title="Lidgeld" className="text-sm text-gray-500 py-1">
                Lidgeld
              </a>
            </Link>
            <Link href="/jeugd/online-registratie/">
              <a
                title="Online registratie"
                className="text-sm text-gray-500 py-1"
              >
                Online registratie
              </a>
            </Link>
            <Link href="/jeugd/mutualiteit/">
              <a title="Mutualiteit" className="text-sm text-gray-500 py-1">
                Mutualiteit
              </a>
            </Link>
            <Link href="/jeugd/ongevallen/">
              <a title="Ongevallen" className="text-sm text-gray-500 py-1">
                Ongevallen
              </a>
            </Link>
            <Link href="/jeugd/blessures/">
              <a title="Blessures" className="text-sm text-gray-500 py-1">
                Blessures
              </a>
            </Link>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="text-base pb-4 text-gray-800">Info</h4>
            <Link href="/info/geschiedenis">
              <a title="Geschiedenis" className="text-sm text-gray-500 py-1">
                Geschiedenis
              </a>
            </Link>
            <Link href="/info/bestuur">
              <a title="Bestuur" className="text-sm text-gray-500 py-1">
                Bestuur
              </a>
            </Link>
            <Link href="/info/secretariaat">
              <a title="Secretariaat" className="text-sm text-gray-500 py-1">
                Secretariaat
              </a>
            </Link>
            <Link href="/info/weerbericht">
              <a title="Weerbericht" className="text-sm text-gray-500 py-1">
                Weerbericht
              </a>
            </Link>
            <Link href="/info/contact">
              <a title="Contact" className="text-sm text-gray-500 py-1">
                Contact & ligging
              </a>
            </Link>
            <Link href="/info/downloads">
              <a title="Downloads" className="text-sm text-gray-500 py-1">
                Downloads
              </a>
            </Link>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="text-base pb-4 text-gray-800">Geschiedenis</h4>
            <Link href="/commercieel/sponsors">
              <a title="Sponsors" className="text-sm text-gray-500 py-1">
                Sponsors
              </a>
            </Link>
            <Link href="/commercieel/huur-benedenkantine">
              <a title="Huur kantine" className="text-sm text-gray-500 py-1">
                Huur kantine
              </a>
            </Link>
            <Link href="/evenementen">
              <a title="Evenementen" className="text-sm text-gray-500 py-1">
                Evenementen
              </a>
            </Link>
            <a
              title="KKFC Webshop"
              href="https://kontich.clubwereld.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 py-1"
            >
              KKFC Webshop
            </a>
          </div>
        </div>
        <div className="flex md:flex-row items-start flex-col-reverse">
          <div className="pt-6 md:pt-0 md:w-1/2 text-sm leading-loose">
            <p>Copyright © Koninklijke Kontich Football Club.</p>
            <p>Duffelsesteenweg 73, 2550 Kontich</p>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-row md:justify-end">
            <a
              title="Volg K. Kontich F.C. op Facebook"
              href="https://facebook.com/kkontichfc"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-2 md:pb-0 md:px-3 text-sm flex items-center text-grey-darkest"
            >
              <svg
                className="w-5 mr-2"
                viewBox="0 0 17 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Footer"
                    transform="translate(-575.000000, -265.000000)"
                    fill="#6A6A6A"
                  >
                    <g
                      transform="translate(0.000000, 31.000000)"
                      id="Footer-Menu-4"
                    >
                      <g transform="translate(414.000000, 0.000000)">
                        <g
                          id="footer-icons"
                          transform="translate(121.000000, 234.000000)"
                        >
                          <g
                            id="facebook"
                            transform="translate(40.000000, 0.000000)"
                          >
                            <path
                              d="M15.4545455,0 L1.54545455,0 C0.691590909,0 0,0.691590909 0,1.54545455 L0,15.4545455 C0,16.3084091 0.691590909,17 1.54545455,17 L9.27272727,17 L9.27272727,10.0454545 L6.95454545,10.0454545 L6.95454545,7.72727273 L9.27272727,7.72727273 L9.27272727,6.48240909 C9.27272727,4.12559091 10.421,3.09090909 12.3798636,3.09090909 C13.3179545,3.09090909 13.8140455,3.16045455 14.0489545,3.19213636 L14.0489545,5.40909091 L12.7129091,5.40909091 C11.8814545,5.40909091 11.5909091,5.848 11.5909091,6.73663636 L11.5909091,7.72727273 L14.0280909,7.72727273 L13.6973636,10.0454545 L11.5909091,10.0454545 L11.5909091,17 L15.4545455,17 C16.3084091,17 17,16.3084091 17,15.4545455 L17,1.54545455 C17,0.691590909 16.3076364,0 15.4545455,0 Z"
                              id="Path"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              /kkontichfc
            </a>
            <a
              title="info@kkontichfc.be"
              href="mailto:info@kkontichfc.be"
              className="pb-2 md:pb-0 md:px-3 text-sm flex items-center text-grey-darkest"
            >
              info@kkontichfc.be
            </a>
            <a
              title="Panathlon Vlaanderen"
              href="http://panathlonvlaanderen.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:px-3 text-sm flex items-center text-grey-darkest"
            >
              <img
                src={prefixURL("/static/img/panathlonvlaanderen.png")}
                className="w-8"
                alt="Panathlon Vlaanderen"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
