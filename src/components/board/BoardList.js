import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";

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
                  <tr key={member.email}>
                    <td className="py-6 font-semibold">
                      {member.firstname} {member.lastname}
                    </td>
                    <td className="py-6">{member.function}</td>
                    <td className="py-6">{member.tel}</td>
                    <td className="py-6 text-center">
                      <a
                        className="inline-block"
                        href={`mailto:${member.email}`}
                        title={member.email}
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
