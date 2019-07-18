import React from "react";

const PurgeHack = () => {
  return (
    <div className="preload image-gallery fullscreen-modal" aria-live="polite">
      <div className="image-gallery-content fullscreen">
        <div className="image-gallery-slide-wrapper bottom ">
          <button
            type="button"
            className="image-gallery-fullscreen-button active"
            aria-label="Open Fullscreen"
          />
          <div className="image-gallery-swipe">
            <div className="image-gallery-slides">
              <div
                className="image-gallery-slide center"
                style={{
                  transform: "translate3d(0%, 0px, 0px)",
                  transition: "all 1000ms ease-out 0s"
                }}
              >
                <div className="image-gallery-image">
                  <img
                    src="https://res.cloudinary.com/kkontichfc/image/upload/c_fit,h_600,w_1000/krantenartikels/65688847_3044176095600355_1039146450841239552_n_vthfev"
                    alt="Wes De Ceuster en KKFC oefenen tegen Beerschot"
                    title="Wes De Ceuster en KKFC oefenen tegen Beerschot"
                  />
                </div>
              </div>
              <div
                className="image-gallery-slide right"
                style={{
                  transform: "translate3d(100%, 0px, 0px)",
                  transition: "all 1000ms ease-out 0s"
                }}
              >
                <div className="image-gallery-image">
                  <img
                    src="https://res.cloudinary.com/kkontichfc/image/upload/c_fit,h_600,w_1000/krantenartikels/65321966_3044980625519902_3948184631429300224_n_ziur5z"
                    alt="Wes De Ceuster: Dit keer dubbele cijfers vermijden"
                    title="Wes De Ceuster: Dit keer dubbele cijfers vermijden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-gallery-thumbnails-wrapper bottom ">
          <div className="image-gallery-thumbnails">
            <div
              className="image-gallery-thumbnails-container"
              aria-label="Thumbnail Navigation"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <a
                role="button"
                aria-pressed="true"
                aria-label="Go to Slide 1"
                className="image-gallery-thumbnail active"
              >
                <div className="image-gallery-thumbnail-inner">
                  <img
                    src="https://res.cloudinary.com/kkontichfc/image/upload/c_fill,h_150,w_250/krantenartikels/65688847_3044176095600355_1039146450841239552_n_vthfev"
                    alt="Wes De Ceuster en KKFC oefenen tegen Beerschot"
                    title="Wes De Ceuster en KKFC oefenen tegen Beerschot"
                  />
                </div>
              </a>
              <a
                role="button"
                aria-pressed="false"
                aria-label="Go to Slide 2"
                className="image-gallery-thumbnail"
              >
                <div className="image-gallery-thumbnail-inner">
                  <img
                    src="https://res.cloudinary.com/kkontichfc/image/upload/c_fill,h_150,w_250/krantenartikels/65321966_3044980625519902_3948184631429300224_n_ziur5z"
                    alt="Wes De Ceuster: Dit keer dubbele cijfers vermijden"
                    title="Wes De Ceuster: Dit keer dubbele cijfers vermijden"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurgeHack;
