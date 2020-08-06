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
function PracticeCard(props) {
  console.log(props.randomQuestion)
  return (
<div>  
      <div className="card" style = {styles.card}>
        <div className="card-body" style = {styles.heading}>Practice Questions!</div>
          <h5 className="card-title" style = {styles.title}>Category: {props.randomQuestion && props.randomQuestion.category.title}</h5>
          <p className="card-text" style = {styles.content}>Value: {props.randomQuestion && props.randomQuestion.value}</p>
          <p className="card-text" style = {styles.content}>Question: {props.randomQuestion && props.randomQuestion.question}</p>

          <p className="answer hidden" style = {styles.content} id="practiceAnswer">Answer: {props.randomQuestion && props.randomQuestion.answer}</p>
        </div>
      </div>

  );
}

export default PracticeCard;