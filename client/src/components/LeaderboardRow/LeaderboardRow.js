import React, { useState } from "react";

function LeaderboardRow(props) {
console.log(props);
  return (
    <tr>
        <th scope="row">{props.id}</th>
        <td>{props.player}</td>
        <td>{props.score}</td>
      </tr>
  );
}

export default LeaderboardRow;