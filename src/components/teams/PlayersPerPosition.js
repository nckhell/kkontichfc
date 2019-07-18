import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";

const PlayersPerPosition = props => {
  const { data, type, title } = props;

  return (
    <div>
      <h2>{title}</h2>
      <div className="mt-6 mb-6 md:flex md:-mx-2 flex-wrap">
        {data &&
          data
            .filter(player => {
              return player.position === type;
            })
            .map(player => {
              return <Profile data={player} type="player" key={player.name} />;
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
