import React, {useState} from "react";
import QuestionModal from "../QuestionModal/QuestionModal";

function QuestionCard(props) {
const [modalShow, setModalShow] = useState(false);

  function showModal(props){
    console.log(props, 'In show modal props');
    setModalShow(true);
  }


  //needs to be updated to disable link after being clicked
  function disableBtn() {
    document.getElementById("answerBtn").classList.add("disabled");
  }

  return (
      <div className="col" >
        <QuestionModal  show={modalShow}
          onHide={() => setModalShow(false)}
          props={props}
        ></QuestionModal>
        <div className="card">
          <div className="card-body text-center" id={props.categoryID} index={props.index}>
            <button 
              id="answerBtn"
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