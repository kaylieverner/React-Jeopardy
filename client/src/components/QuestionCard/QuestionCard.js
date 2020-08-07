import React, {useState} from "react";
import QuestionModal from "../QuestionModal/QuestionModal";

function QuestionCard(props) {
const [modalShow, setModalShow] = useState(false);

  function showModal(props){
    // console.log(props, 'In show modal props');
    setModalShow(true);
    disableLink(props.categoryID)
  }
  
  function disableLink(props) {
    document.getElementById(props.categoryID).classList.add("disabled")
  }

  return (
      <div className="col" >
        <QuestionModal  show={modalShow}
          onHide={() => setModalShow(false)}
          props={props}
        ></QuestionModal>
        <div className="card">
          <div className="card-body text-center" value={props.level} id={props.categoryID} index={props.index}>
            <button 
              id={props.categoryID}
              type="button" 
              className="btn btn-link" 
              onClick={() => showModal(props)}
              >
              {props.level}
            </button>
          </div>
        </div>
      </div>
    );
}

export default QuestionCard;