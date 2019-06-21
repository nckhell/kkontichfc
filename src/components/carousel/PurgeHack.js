import React from "react";

const PurgeHack = () => {
  return (
    <div className="carousel carousel-slider" style={{ width: "100%" }}>
      <button
        type="button"
        className="control-arrow control-prev control-disabled"
      />
      <div className="slider-wrapper axis-horizontal">
        <ul
          className="slider"
          style={{ transform: "translate3d(-100%, 0px, 0px)" }}
        >
          <li className="slide selected">
            <div className="w-full h-full bg-cover">
              <div className="gradient-wrapper flex items-center">
                <div className="px-4 container mx-auto text-left md:px-0">
                  <div className="news-category text-white akern">A-kern</div>
                  <a href="#" className="block">
                    <div className="text-2xl py-4 font-semibold text-white md:text-3xl lg:w-4/6 xl:block xl:max-w-6xl xl:text-4xl">
                      <span className="text-yellow-400"></span>
                    </div>
                  </a>
                  <div className="text-sm md:text-base font-semibold text-white">
                    <div className="inline-block align-middle pr-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          version="1.1"
                          width="24px"
                          height="24px"
                          className="injected-svg"
                          data-src="/static/img/clock.svg"
                          style={{ fill: "#fff" }}
                        >
                          <g id="surface1">
                            <path
                              style={{}}
                              d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 2 C 17.523438 2 22 6.476563 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476563 22 2 17.523438 2 12 C 2 6.476563 6.476563 2 12 2 Z M 10.9375 3.875 L 10.5 12.0625 L 10.59375 12.9375 L 16.75 18.375 L 17.71875 17.375 L 12.625 11.96875 L 12.1875 3.875 Z "
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="slide selected">
            <div className="w-full h-full bg-cover">
              <div className="gradient-wrapper flex items-center">
                <div className="px-4 container mx-auto text-left md:px-0">
                  <div className="news-category text-white akern">A-kern</div>
                  <a href="#" className="block">
                    <div className="text-2xl py-4 font-semibold text-white md:text-3xl lg:w-4/6 xl:block xl:max-w-6xl xl:text-4xl">
                      <span className="text-yellow-400"></span>
                    </div>
                  </a>
                  <div className="text-sm md:text-base font-semibold text-white">
                    <div className="inline-block align-middle pr-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          version="1.1"
                          width="24px"
                          height="24px"
                          className="injected-svg"
                          data-src="/static/img/clock.svg"
                          style={{ fill: "#fff" }}
                        >
                          <g id="surface1">
                            <path
                              style={{}}
                              d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 2 C 17.523438 2 22 6.476563 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476563 22 2 17.523438 2 12 C 2 6.476563 6.476563 2 12 2 Z M 10.9375 3.875 L 10.5 12.0625 L 10.59375 12.9375 L 16.75 18.375 L 17.71875 17.375 L 12.625 11.96875 L 12.1875 3.875 Z "
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="control-arrow control-next control-disabled"
      />
      <ul className="control-dots">
        <li className="dot selected" value={0} role="button" tabIndex={0} />
      </ul>
    </div>
  );
};

export default PurgeHack;
