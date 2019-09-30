import React from "react";
import PropTypes from "prop-types";

const RankingTableComponent = props => {
  const { listOfTeams, typeOfRanking, limit } = props;
  let rowCount = 0;

  const kontichPositionInRankingArray = listOfTeams.findIndex(
    rankingEntry => rankingEntry.clubRegistrationNumber === "03029"
  );

  const kontichPositionInRanking = kontichPositionInRankingArray + 1;

  return (
    <div className="overflow-x-auto">
      <table className="ranking-table w-full text-center">
        <thead>
          <tr className="text-gray-600">
            <th className="text-left">#</th>
            <th></th>
            <th className="text-left">Ploeg</th>
            <th className="lg:hidden font-semibold">Ptn</th>
            <th>M</th>
            <th>W</th>
            <th>V</th>
            <th>G</th>
            <th>+</th>
            <th>-</th>
            <th>+/-</th>
            <th className="hidden lg:block font-semibold">Ptn</th>
          </tr>
        </thead>
        <tbody>
          {listOfTeams &&
            listOfTeams.map(teamRankingEntry => {
              rowCount += 1;
              if (
                limit &&
                (rowCount <= limit ||
                  (kontichPositionInRanking > limit &&
                    teamRankingEntry.clubRegistrationNumber === "03029"))
              ) {
                return (
                  <tr
                    key={`${typeOfRanking}-${teamRankingEntry.teamId}`}
                    className={
                      teamRankingEntry.clubRegistrationNumber === "03029"
                        ? "bg-yellow-100"
                        : ""
                    }
                  >
                    <td className="font-semibold no-padding">
                      {teamRankingEntry.position}
                    </td>
                    <td className="text-center no-padding">
                      <img
                        src={teamRankingEntry.logo}
                        className="h-8 inline-block"
                        alt={`Clublogo ${teamRankingEntry.name}`}
                      />
                    </td>
                    <td className="text-left">{teamRankingEntry.name}</td>
                    <td className="lg:hidden font-semibold">
                      {teamRankingEntry.points}
                    </td>
                    <td>{teamRankingEntry.matchesPlayed}</td>
                    <td>{teamRankingEntry.matchesWon}</td>
                    <td>{teamRankingEntry.matchesLost}</td>
                    <td>{teamRankingEntry.matchesDrawn}</td>
                    <td>{teamRankingEntry.goalsFor}</td>
                    <td>{teamRankingEntry.goalsAgainst}</td>
                    <td>{teamRankingEntry.goalDifference}</td>
                    <td className="hidden lg:block font-semibold">
                      {teamRankingEntry.points}
                    </td>
                  </tr>
                );
              }
              return false;
            })}
        </tbody>
      </table>
    </div>
  );
};

RankingTableComponent.propTypes = {
  listOfTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
  typeOfRanking: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired
};

export default RankingTableComponent;
