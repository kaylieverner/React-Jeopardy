import React, {useState} from "react";
import QuestionModal from "../QuestionModal/QuestionModal";


function QuestionCard(props) {
const [modalShow, setModalShow] = useState(false);

  function showModal(props){
    console.log(props, 'In show modal props');
    setModalShow(true)
    // try to remder the component here??
    // return (
    //   <QuestionModal props={props} />
    // )

  }

  return (
      <div className="col">
        <QuestionModal  show={modalShow}
          onHide={() => setModalShow(false)}
          props={props}
        ></QuestionModal>
        <div className="card">
          <div className="card-body text-center">
            <button 
              type="button" 
              class="btn btn-link" 
              onClick={() => showModal(props)}>
              {props.level}
            </button>
          </div>
        </div>
      </div>
 
    
    );
}

export default QuestionCard;


