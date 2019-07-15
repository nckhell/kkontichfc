import React from "react";
import PropTypes from "prop-types";

const BoardList = props => {
  const { members, name } = props;

  return (
    <div>
      <h2>{name}</h2>
      <table width="100%" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>Naam</th>
            <th>Functie</th>
            <th>Telefoon</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {members &&
            members.map(member => {
              return (
                <tr key={member.email}>
                  <td>
                    {member.firstname} {member.lastname}
                  </td>
                  <td>{member.function}</td>
                  <td>{member.tel}</td>
                  <td>
                    <a href={`mailto:${member.email}`} title={member.email}>
                      {member.email}
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

BoardList.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  members: PropTypes.array.isRequired
};

export default BoardList;
