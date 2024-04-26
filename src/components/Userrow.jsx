import React from "react";
import { Link } from "react-router-dom";

function Userrow({ user, serialNo }) {
  return (
    <tr>
      <td>{serialNo}</td>

      <td>{user.id}</td>

      <td>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </td>
    </tr>
  );
}

export default Userrow;
