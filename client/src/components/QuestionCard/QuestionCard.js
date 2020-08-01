import React from "react";
import { defaultProps } from "grommet";

function QuestionCard(props) {
  return (
  <div className="col">
    <div className="card">
      <div className="card-body text-center">
        <button type="button" class="btn btn-link">{props.level}</button>
      </div>
    </div>
  </div>
  );
}

export default QuestionCard;


