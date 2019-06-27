import React from "react";

const NoRankingToShow = (
  <div>
    <div className="tab-list ranking-tabs">
      <ol className="tab-list ranking-tabs">
        <li className="tab-list-item tab-list-active">
          <a href="#not-available">&nbsp;</a>
        </li>
      </ol>
    </div>
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
          <tr>
            <td colSpan="12">Nog geen klassement beschikbaar</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default NoRankingToShow;
