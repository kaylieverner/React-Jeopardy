import React, {useState} from "react";
import QuestionModal from "../QuestionModal/QuestionModal";

function QuestionCard(props) {
const [modalShow, setModalShow] = useState(false);

  function showModal(props){
    console.log(props, 'In show modal props');
    setModalShow(true)
  }


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
      <div className="col" >
        <QuestionModal  show={modalShow}
          onHide={() => setModalShow(false)}
          props={props}
        ></QuestionModal>
        <div className="card">
          <div className="card-body text-center" id={props.categoryID} index={props.index}>
            <button 
              type="button" 
              className="btn btn-link" 
              onClick={() => showModal(props)}>
              {props.level}
            </button>
          </div>
        </div>
      </div>
    );
}

export default QuestionCard;