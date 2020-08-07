import React from "react";
import { Button, Modal } from 'react-bootstrap';
import './style.css'

function QuestionModal(props) {
  console.log(props.props.numOfPlayers)
    function showAnswer() {
      document.getElementById("answer").classList.remove("hidden");
    }

    function populatePlayerBtns() {
      if (props.props.numOfPlayers === "1") {
        return <div><Button>{props.props.playersScores[0].name}</Button> <Button>None</Button></div>
      }
      if (props.props.numOfPlayers === "2") {
        return <div><Button>{props.props.playersScores[0].name}</Button> <Button>{props.props.playersScores[1].name}</Button> <Button>None</Button></div>
      }
      if (props.props.numOfPlayers === "3") {
        return <div><Button>{props.props.playersScores[0].name}</Button> <Button>{props.props.playersScores[1].name}</Button> <Button>{props.props.playersScores[2].name} </Button> <Button>None</Button></div>
      }
      if (props.props.numOfPlayers === "4") {
        return <div><Button>{props.props.playersScores[0].name}</Button> <Button>{props.props.playersScores[1].name}</Button> <Button>{props.props.playersScores[2].name} </Button> <Button>{props.props.playersScores[3].name}</Button> <Button>None</Button></div>
      }
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
            {populatePlayerBtns()}
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