import React from "react";

const PurgeHack = () => {
  return (
    <div className="ReactModalPortal ReactModal__Body--open">
      <div
        className="ReactModal__Overlay ReactModal__Overlay--after-open"
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          backgroundColor: "transparent",
          zIndex: 1000
        }}
      >
        <div
          className="ReactModal__Content ReactModal__Content--after-open"
          tabIndex={-1}
          role="dialog"
          aria-label="Lightbox"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            border: "none",
            background: "transparent",
            overflow: "hidden",
            borderRadius: "0px",
            outline: "none",
            padding: "0px"
          }}
        >
          <div
            className="ril-outer ril__outer ril__outerAnimating  "
            tabIndex={-1}
            style={{
              transition: "opacity 300ms ease 0s",
              animationDuration: "300ms",
              animationDirection: "reverse"
            }}
          >
            <div className="ril-inner ril__inner">
              <img
                className="ril-image-current ril__image"
                src="https://res.cloudinary.com/kkontichfc/image/upload/v1/teams/2018-2019/u17-rood_r3avrz"
                alt="Dummy"
              />
            </div>
            <div className="ril-toolbar ril__toolbar">
              <ul className="ril-toolbar-left ril__toolbarSide ril__toolbarLeftSide">
                <li className="ril-toolbar__item ril__toolbarItem">
                  <span className="ril-toolbar__item__child ril__toolbarItemChild" />
                </li>
              </ul>
              <ul className="ril-toolbar-right ril__toolbarSide ril__toolbarRightSide">
                <li className="ril-toolbar__item ril__toolbarItem">
                  <button
                    type="button"
                    aria-label="Zoom in"
                    className="ril-zoom-in ril__toolbarItemChild ril__builtinButton ril__zoomInButton"
                  />
                </li>
                <li className="ril-toolbar__item ril__toolbarItem">
                  <button
                    type="button"
                    aria-label="Zoom out"
                    className="ril-zoom-out ril__toolbarItemChild ril__builtinButton ril__zoomOutButton ril__builtinButtonDisabled"
                    disabled
                  />
                </li>
                <li className="ril-toolbar__item ril__toolbarItem">
                  <button
                    type="button"
                    aria-label="Close lightbox"
                    className="ril-close ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton ril__closeButton"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurgeHack;
