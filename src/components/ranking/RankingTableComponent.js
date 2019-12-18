import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import {
  clubRegistrationNumberLens,
  teamIdLens,
  positionLens,
  goalDifferenceLens,
  goalsAgainstLens,
  goalsForLens,
  matchesDrawnLens,
  matchesLostLens,
  matchesPlayedLens,
  matchesWonLens,
  teamLogoLens,
  teamNameLens,
  pointsLens
} from "../../imports/api/kbvb/rankings/lenses";

const RankingTableComponent = props => {
  const { listOfTeams, typeOfRanking, limit } = props;
  let rowCount = 0;

  const positionOfKontichInRanking = R.compose(
    position => position + 1,
    arr =>
      arr.findIndex(
        rankingEntry =>
          R.view(clubRegistrationNumberLens, rankingEntry) === "03029"
      )
  )(listOfTeams);

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
                  (positionOfKontichInRanking > limit &&
                    R.view(clubRegistrationNumberLens, teamRankingEntry) ===
                      "03029"))
              ) {
                return (
                  <tr
                    key={`${typeOfRanking}-${R.view(
                      teamIdLens,
                      teamRankingEntry
                    )}`}
                    className={
                      R.view(clubRegistrationNumberLens, teamRankingEntry) ===
                      "03029"
                        ? "bg-yellow-100"
                        : ""
                    }
                  >
                    <td className="font-semibold no-padding">
                      {R.view(positionLens, teamRankingEntry)}
                    </td>
                    <td className="text-center no-padding">
                      <img
                        src={R.view(teamLogoLens, teamRankingEntry)}
                        className="h-8 inline-block"
                        alt={`Clublogo ${R.view(
                          teamNameLens,
                          teamRankingEntry
                        )}`}
                      />
                    </td>
                    <td className="text-left">
                      {R.view(teamNameLens, teamRankingEntry)}
                    </td>
                    <td className="lg:hidden font-semibold">
                      {R.view(pointsLens, teamRankingEntry)}
                    </td>
                    <td>{R.view(matchesPlayedLens, teamRankingEntry)}</td>
                    <td>{R.view(matchesWonLens, teamRankingEntry)}</td>
                    <td>{R.view(matchesLostLens, teamRankingEntry)}</td>
                    <td>{R.view(matchesDrawnLens, teamRankingEntry)}</td>
                    <td>{R.view(goalsForLens, teamRankingEntry)}</td>
                    <td>{R.view(goalsAgainstLens, teamRankingEntry)}</td>
                    <td>{R.view(goalDifferenceLens, teamRankingEntry)}</td>
                    <td className="hidden lg:block font-semibold">
                      {R.view(pointsLens, teamRankingEntry)}
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
