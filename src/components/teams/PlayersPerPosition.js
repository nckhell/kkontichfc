import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Profile from "./Profile";

const PlayersPerPosition = props => {
  const { data, type, title } = props;

  const players = _.orderBy(data, "lastname", "asc");

  return (
    <div>
      <h2>{title}</h2>
      <div className="mt-6 mb-6 md:flex md:-mx-2 flex-wrap">
        {players &&
          players
            .filter(player => {
              return player.position === type;
            })
            .map(player => {
              return (
                <Profile
                  data={player}
                  type="player"
                  key={`${player.firstname}${player.lastname}`}
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
