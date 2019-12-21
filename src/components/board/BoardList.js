import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";
import { functionLens } from "../../imports/api/board/lenses/members";
import {
  firstnameLens,
  lastnameLens,
  emailLens,
  telLens
} from "../../imports/api/profiles/lenses";

const BoardList = props => {
  const { members, name } = props;

  return (
    <div className="mb-2 md:mb-4">
      <h2>{name}</h2>
      <div className="overflow-x-auto">
        <table className="w-full" width="100%" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>Naam</th>
              <th>Functie</th>
              <th>Telefoon</th>
              <th className="text-center">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {members &&
              members.map(member => {
                return (
                  <tr key={R.view(emailLens, member)}>
                    <td className="py-6 font-semibold">
                      {R.view(firstnameLens, member)}{" "}
                      {R.view(lastnameLens, member)}
                    </td>
                    <td className="py-6">{R.view(functionLens, member)}</td>
                    <td className="py-6">{R.view(telLens, member)}</td>
                    <td className="py-6 text-center">
                      <a
                        className="inline-block"
                        href={`mailto:${R.view(emailLens, member)}`}
                        title={R.view(emailLens, member)}
                      >
                        <ReactSVG
                          className="inline-block align-middle pr-2 w-8"
                          beforeInjection={svg => {
                            svg.setAttribute("style", "fill: #3E4C59");
                          }}
                          src={prefixURL("/static/img/email.svg")}
                        />
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

BoardList.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  members: PropTypes.array.isRequired
};

export default BoardList;
