import React, { useState } from "react";

function LeaderboardRow(props) {

  return (
    <tr>
        <th scope="row">rank</th>
        <td>{props.player}</td>
        <td>{props.score}</td>
      </tr>
  );
}

export default LeaderboardRow;