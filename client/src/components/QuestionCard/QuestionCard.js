import React, {useState} from "react";


function QuestionCard(props) {

  return (
  <div className="col">
    <div className="card">
      <div className="card-body text-center">
        <button type="button" class="btn btn-link" onClick={() => props.setModalShow(true)}>{props.level}</button>
      </div>
    </div>
  </div>
  );
}

export default QuestionCard;


