import React from "react";
import PropTypes from "prop-types";

const RankingTableComponent = props => {
  const { listOfTeams, typeOfRanking } = props;
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Ploeg</th>
            <th>M</th>
            <th>W</th>
            <th>V</th>
            <th>G</th>
            <th>+</th>
            <th>-</th>
            <th>+/-</th>
            <th>Ptn</th>
          </tr>
        </thead>
        <tbody>
          {listOfTeams &&
            listOfTeams.map(teamRankingEntry => {
              return (
                <tr key={`${typeOfRanking}-${teamRankingEntry.teamId}`}>
                  <td>{teamRankingEntry.position}</td>
                  <td>
                    <img
                      src={teamRankingEntry.logo}
                      alt={`Clublogo ${teamRankingEntry.name}`}
                      width="22"
                    />
                    {teamRankingEntry.name}
                  </td>
                  <td>{teamRankingEntry.matchesPlayed}</td>
                  <td>{teamRankingEntry.matchesWon}</td>
                  <td>{teamRankingEntry.matchesLost}</td>
                  <td>{teamRankingEntry.matchesDrawn}</td>
                  <td>{teamRankingEntry.goalsFor}</td>
                  <td>{teamRankingEntry.goalsAgainst}</td>
                  <td>{teamRankingEntry.goalDifference}</td>
                  <td>{teamRankingEntry.points}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

RankingTableComponent.propTypes = {
  listOfTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
  typeOfRanking: PropTypes.string.isRequired
};

export default RankingTableComponent;
