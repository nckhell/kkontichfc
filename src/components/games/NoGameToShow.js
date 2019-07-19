import React from "react";
import PropTypes from "prop-types";
import { TextBlock } from "react-placeholder/lib/placeholders";

const NoGameToShow = props => {
  const { type } = props; // next-game or latest-game

  return (
    <div>
      <div className="border border-gray-200 border-b-4">
        <div className="border-gray-200 border-b text-center font-semibold py-4 text-lg uppercase">
          <div className="w-4/6 mx-auto text-center">
            {type === "next-game" ? "Volgende wedstrijd" : ""}
            {type === "latest-game" ? "Laatste wedstrijd" : ""}
          </div>
        </div>
        <div className="border-gray-200 border-b flex items-center justify-center py-16 text-gray-700 text-center px-4">
          {type === "next-game"
            ? "De volgende wedstrijd is nog niet ingepland."
            : ""}
          {type === "latest-game"
            ? "Geen informatie beschikbaar over de laatste wedstrijd"
            : ""}
        </div>
        <div className="text-xl text-gray-400 py-4 flex flex-col items-center justify-center text-center">
          <div className="w-5/6 mx-auto text-center">
            <TextBlock color="#E4E7EB" rows={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

NoGameToShow.propTypes = {
  type: PropTypes.string.isRequired
};

export default NoGameToShow;
