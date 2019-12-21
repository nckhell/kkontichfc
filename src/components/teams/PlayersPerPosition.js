import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import Profile from "./Profile";
import {
  firstnameLens,
  lastnameLens,
  positionLens
} from "../../imports/api/profiles/lenses";

const PlayersPerPosition = props => {
  const { data, type, title } = props;

  const players = R.sortBy(
    R.compose(
      R.toLower,
      R.view(lastnameLens)
    ),
    data
  );

  return (
    <div>
      <h2>{title}</h2>
      <div className="mt-6 mb-6 md:flex md:-mx-2 flex-wrap">
        {players &&
          players
            .filter(player => {
              return R.view(positionLens, player) === type;
            })
            .map(player => {
              return (
                <Profile
                  data={player}
                  type="player"
                  key={`${R.view(firstnameLens, player)}${R.view(
                    lastnameLens,
                    player
                  )}`}
                />
              );
            })}
      </div>
    </div>
  );
};

PlayersPerPosition.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PlayersPerPosition;
