import React from "react";

const styles = {
      card: {
        margin: 60,
        background: "#e8eaf6",
        minHeight: 150,
        width: 600
        
      },
      heading: {
        background: "salmon",
        minHeight: 30,
        lineHeight: 2.5,
        fontSize: "1.2rem",
        color: "white",
        padding: "0 20px"
      },
      title: {
        padding: 30
      },
      content: {
        padding: 30
      },
      
    };
function QuestionCard() {
  return (
<div>  
      <div className="card" style = {styles.card}>
        <div className="card-body" style = {styles.heading}>Practice Questions!</div>
          <h5 className="card-title" style = {styles.title}>Category</h5>
          <p className="card-text" style = {styles.content}>Question</p>
          {/* <div> <button type="button" className="button">Show Answer</button> </div>
          <div> <button type="button" className="button">Next Question</button></div> */}
        </div>
      </div>

  );
}

export default QuestionCard;


