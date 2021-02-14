import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import ReactSVG from "react-svg";

const YouthTeamTrainers = props => {
  const { data, title, coordinator, coordinatorEmail } = props;

  return (
    <div className="mb-2 md:mb-4">
      <h2>{title}</h2>
      {coordinator && (
        <div className="mb-4">
          <b>Coördinator:</b> {coordinator}
          {coordinatorEmail && <a
            className="inline-block align-middle ml-2 w-6"
            href={`mailto:${coordinatorEmail}`}
            title={coordinatorEmail}
          >
            <ReactSVG
              beforeInjection={svg => {
                svg.setAttribute("style", "fill: #3E4C59");
              }}
              src={prefixURL("/static/img/email.svg")}
            />
          </a>}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full" width="100%" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>Team</th>
              <th>Naam</th>
              <th className="text-center">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(entry => {
                return (
                  <tr key={`${entry.team}${entry.coach[0].firstname}`}>
                    <td width="230" className="font-semibold">
                      {entry.team}
                    </td>
                    <td className="py-6">
                      {entry.coach &&
                        entry.coach.map(coach => {
                          return (
                            <div key={coach.lastname}>
                              {coach.firstname} {coach.lastname}
                            </div>
                          );
                        })}
                    </td>
                    <td className="py-6 text-center">
                      {entry.coach &&
                        entry.coach.map(coach => {
                          if(coach.email) {
                            return (
                              <div key={coach.lastname}>
                                <a
                                  className="inline-block"
                                  href={`mailto:${coach.email}`}
                                  title={coach.email}
                                >
                                  <ReactSVG
                                    className="inline-block align-middle pr-2 w-8"
                                    beforeInjection={svg => {
                                      svg.setAttribute("style", "fill: #3E4C59");
                                    }}
                                    src={prefixURL("/static/img/email.svg")}
                                  />
                                </a>
                              </div>
                            );
                          }
                        })}
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

YouthTeamTrainers.defaultProps = {
  coordinator: null,
  coordinatorEmail: null
};

YouthTeamTrainers.propTypes = {
  title: PropTypes.string.isRequired,
  coordinator: PropTypes.string,
  coordinatorEmail: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default YouthTeamTrainers;
