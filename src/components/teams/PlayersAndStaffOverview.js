/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef-init */
import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayersAndStaffContent from "../../../content/players-staff";
import Profile from "./Profile";

class PlayersAndStaffOverview extends Component {
  componentDidMount() {}

  render() {
    const { teamID } = this.props;

    const doesExist = PlayersAndStaffContent[teamID];
    let staff = undefined;
    let players = undefined;

    if (doesExist) {
      staff = PlayersAndStaffContent[teamID].staff;
      players = PlayersAndStaffContent[teamID].players;
    }

    return (
      <div>
        {staff && (
          <div>
            <h3>Staff</h3>
            <div className="mt-6 lg:flex lg:-mx-2 flex-wrap mb-6 lg:mb-10">
              {staff.map(staffMember => {
                return (
                  <Profile
                    data={staffMember}
                    type="staff"
                    key={staffMember.name}
                  />
                );
              })}
            </div>
          </div>
        )}

        {players && (
          <div>
            <h3>Spelers</h3>
            <div className="mt-6 lg:flex lg:-mx-2 flex-wrap">
              {players.map(player => {
                return (
                  <Profile data={player} type="player" key={player.name} />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

PlayersAndStaffOverview.propTypes = {
  teamID: PropTypes.string.isRequired
};

export default PlayersAndStaffOverview;
