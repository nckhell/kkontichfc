/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef-init */
import React, { Component } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import PlayersAndStaffContent from "../../../content/players-staff";
import Profile from "./Profile";
import PlayersPerPosition from "./PlayersPerPosition";
import { firstnameLens, lastnameLens } from "../../imports/api/profiles/lenses";

class PlayersAndStaffOverview extends Component {
  componentDidMount() {}

  render() {
    const { teamID } = this.props;

    const doesExist = R.view(R.lensProp(teamID));
    let staff = undefined;
    let players = undefined;

    if (doesExist) {
      staff = R.compose(
        R.view(R.lensProp("staff")),
        R.view(R.lensProp(teamID))
      )(PlayersAndStaffContent);

      players = R.compose(
        R.view(R.lensProp("players")),
        R.view(R.lensProp(teamID))
      )(PlayersAndStaffContent);
    }

    return (
      <div>
        {staff && (
          <div>
            <h3>Staff</h3>
            <div className="mt-6 md:flex md:-mx-2 flex-wrap mb-6 md:mb-10">
              {staff.map(staffMember => {
                return (
                  <Profile
                    data={staffMember}
                    type="staff"
                    key={`${R.view(firstnameLens, staffMember)}${R.view(
                      lastnameLens,
                      staffMember
                    )}`}
                  />
                );
              })}
            </div>
          </div>
        )}

        {players && (
          <div>
            <PlayersPerPosition
              data={players}
              type="DOELMAN"
              title="Doelmannen"
            />
            <PlayersPerPosition
              data={players}
              type="VERDEDIGER"
              title="Verdedigers"
            />
            <PlayersPerPosition
              data={players}
              type="MIDDENVELDER"
              title="Middenvelders"
            />
            <PlayersPerPosition
              data={players}
              type="AANVALLER"
              title="Aanvallers"
            />
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
