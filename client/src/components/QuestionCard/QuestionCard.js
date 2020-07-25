import React from "react";

function QuestionCard() {
  return (
<div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Category</h5>
          
          <p className="card-text">Question</p>
          <a href="#" className="card-link">Show Answer</a>
          <a href="#" className="card-link">Next Question</a>
        </div>
      </div>
</div>
  );
}

export default QuestionCard;


