import React from "react";
import { Button, Modal } from 'react-bootstrap';

function QuestionModal(props) {
  console.log(props.props && props.props.question)

//after user clicks on a card, determine which state to pull from
//  function determineQuestionVal() {
//     switch(level) {
//       case "200": 
//         <QuestionModal  show={modalShow}
//         onHide={() => setModalShow(false)}
//         twoHundredQuestions={twoHundredQuestions}
//         ></QuestionModal>
//         break;
//       case "400": 
//         <QuestionModal  show={modalShow}
//         onHide={() => setModalShow(false)}
//         fourHundredQuestions={fourHundredQuestions}
//         ></QuestionModal>
//         break;
//       case "600": 
//         <QuestionModal  show={modalShow}
//         onHide={() => setModalShow(false)}
//         sixHundredQuestions={sixHundredQuestions}
//         ></QuestionModal>
//         break;
//       case "800": 
//         <QuestionModal  show={modalShow}
//         onHide={() => setModalShow(false)}
//         eightHundredQuestions={eightHundredQuestions}
//         ></QuestionModal>
//         break;
//       case "1000": 
//         <QuestionModal  show={modalShow}
//         onHide={() => setModalShow(false)}
//         thousandQuestions={thousandQuestions}
//         ></QuestionModal>
//         break;
//       default: 
//         something
//     }
//   };

//   //conditional rendering to detmerine which specific question within the state to show 
//   function determineSpecificQuestion() {

//   };
  
    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
          {/* {props.props && props.props.question} */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
  
  export default QuestionModal; 