import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayersAndStaffContent from "../../../content/players-staff";
import Profile from "./Profile";

class PlayersAndStaffOverview extends Component {
  componentDidMount() {}

  render() {
    const { teamID } = this.props;

    const { staff } = PlayersAndStaffContent[teamID];
    const { players } = PlayersAndStaffContent[teamID];

    return (
      <div>
        <h3>Staff</h3>
        <div className="mt-6 lg:flex lg:-mx-2 flex-wrap mb-6 lg:mb-10">
          {staff &&
            staff.map(staffMember => {
              return (
                <Profile
                  data={staffMember}
                  type="staff"
                  key={staffMember.name}
                />
              );
            })}
        </div>
        <h3>Spelers</h3>
        <div className="mt-6 lg:flex lg:-mx-2 flex-wrap">
          {players &&
            players.map(player => {
              return <Profile data={player} type="player" key={player.name} />;
            })}
        </div>
      </div>
    );
  }
}

PlayersAndStaffOverview.propTypes = {
  teamID: PropTypes.string.isRequired
};

export default PlayersAndStaffOverview;
