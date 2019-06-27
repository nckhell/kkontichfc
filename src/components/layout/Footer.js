import React from "react";
import { prefixURL } from "next-prefixed";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-100 border-t border-gray-200 mt-16 md:mt-24"
    >
      <div className="container py-8 md:py-16 px-4 mx-auto flex flex-col text-gray-500">
        <div className="flex flex-col md:flex-row md:mb-16">
          <div className="md:w-1/4 flex flex-col mb-8 md:mb-0">
            <h4 className="text-base pb-4 text-gray-800">Eerste elftallen</h4>
            <a href="/featured" className="text-sm text-gray-500 py-1">
              Heren 1e Prov.
            </a>
            <a href="/recent" className="text-sm text-gray-500 py-1">
              Heren 3e Prov.
            </a>
            <a href="/animators" className="text-sm text-gray-500 py-1">
              Dames 1e Nat.
            </a>
            <a href="/animators" className="text-sm text-gray-500 py-1">
              Dames 1e Prov.
            </a>
            <a href="/animators" className="text-sm text-gray-500 py-1">
              Dames 4e Prov.
            </a>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="text-base pb-4 text-gray-800">Jeugd</h4>
            <a
              href="/page/terms-and-conditions"
              className="text-sm text-gray-500 py-1"
            >
              Trainingen
            </a>
            <a
              href="/page/privacy-policy"
              className="text-sm text-gray-500 py-1"
            >
              Ploegen
            </a>
            <a href="/page/contact" className="text-sm text-gray-500 py-1">
              Trainers
            </a>
            <a href="/page/contact" className="text-sm text-gray-500 py-1">
              Kalenders
            </a>
            <a href="/page/contact" className="text-sm text-gray-500 py-1">
              Lidgeld
            </a>
            <a href="/page/contact" className="text-sm text-gray-500 py-1">
              Online registratie
            </a>
            <a href="/page/contact" className="text-sm text-gray-500 py-1">
              Mutaliteiten
            </a>
            <a href="/page/contact" className="text-sm text-gray-500 py-1">
              Ongevallen
            </a>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="text-base pb-4 text-gray-800">Info</h4>
            <a
              href="https://lottiefiles.com/ios"
              className="text-sm text-gray-500 py-1"
            >
              Geschiedenis
            </a>
            <a
              href="https://lottiefiles.com/android"
              className="text-sm text-gray-500 py-1"
            >
              Bestuur
            </a>
            <a
              href="https://lottiefiles.com/android"
              className="text-sm text-gray-500 py-1"
            >
              Secretariaat
            </a>
            <a
              href="https://lottiefiles.com/android"
              className="text-sm text-gray-500 py-1"
            >
              Weerbericht
            </a>
            <a
              href="https://lottiefiles.com/android"
              className="text-sm text-gray-500 py-1"
            >
              Contact
            </a>
            <a
              href="https://lottiefiles.com/android"
              className="text-sm text-gray-500 py-1"
            >
              Downloads
            </a>
            <a
              href="https://lottiefiles.com/android"
              className="text-sm text-gray-500 py-1"
            >
              Organigrammen
            </a>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="text-base pb-4 text-gray-800">Geschiedenis</h4>
            <a
              href="https://creative.adobe.com/addons/products/12557"
              className="text-sm text-gray-500 py-1"
            >
              Sponsors
            </a>
            <a
              href="https://github.com/airbnb/lottie-ios"
              className="text-sm text-gray-500 py-1"
            >
              Huur kantine
            </a>
            <a
              href="https://github.com/airbnb/lottie-android"
              className="text-sm text-gray-500 py-1"
            >
              Evenementen
            </a>
            <a
              href="https://github.com/airbnb/lottie-web"
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
              href="mailto:info@kkontichfc.be"
              className="pb-2 md:pb-0 md:px-3 text-sm flex items-center text-grey-darkest"
            >
              info@kkontichfc.be
            </a>
            <a
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
