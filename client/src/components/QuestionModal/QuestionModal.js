import React from "react";
import { Button, Modal } from 'react-bootstrap';
import './style.css'

function QuestionModal(props) {
  console.log(props)
    function showAnswer() {
      document.getElementById("answer").classList.remove("hidden");
    }

    function addPoints(index) {
      const currentScores = props.props.playersScores; 
      const pointsEarned = parseInt(props.props.level);
      
      const newScore = props.props.playersScores[index].score + pointsEarned; 
      console.log(newScore);
      {props.props.updateScore(newScore, index)}
    }

    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
          {props.props && props.props.question[props.props.index].question}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="answerContainer">
        <Button onClick={showAnswer}>Show Answer</Button>
          <div className="answerDiv hidden m-3" id="answer">
          {props.props && props.props.question[props.props.index].answer}
          </div>
          <div className="row text-center m-3">
          <p className="m-2">Assign Points To:</p>
          {props.props.playersScores.map((player, index) => {
                return <Button className="m-2" onClick={() => addPoints(index)} id={index}>{props.props.playersScores[index].name}</Button>
              })}
              <Button className="m-2">None</Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
  
  export default QuestionModal; 