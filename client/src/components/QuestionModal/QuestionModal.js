import React from "react";
import { Button, Modal } from 'react-bootstrap';
import './style.css'

function QuestionModal(props) {
  console.log(props.props.playersScores)
    function showAnswer() {
      document.getElementById("answer").classList.remove("hidden");
    }

    function updatePlayerScore() {
      //set the playersScores state to the updated score 
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
          <div className="row">
          <p>Assign points to:</p>
          {props.props.playersScores.map((player, index) => {
                return <Button>{props.props.playersScores[index].name}</Button>
              })}
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