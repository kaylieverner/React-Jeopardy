import React, {useEffect, useState} from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import QuestionCard from "../QuestionCard/QuestionCard";
import QuestionModal from "../QuestionModal/QuestionModal";
import API from "../../utils/API";

function Board() {
const [categories, setCategories] = useState([]);
const [questions, setQuestions] = useState([]);
const [twoHundredQuestions, setTwoHundredQuestions] = useState([]);
const [fourHundredQuestions, setFourHundredQuestions] = useState([]);
const [sixHundredQuestions, setSixHundredQuestions] = useState([]);
const [eightHundredQuestions, setEightHundredQuestions] = useState([]);
const [thousandQuestions, setThousandQuestions] = useState([]);


useEffect(() => {
    loadCategories()
  }, [])

useEffect(() => {
    loadQuestions()
  }, [categories])

useEffect(() => {
    if(questions.length > 5){
        categories.forEach(()=>{
            setTwoHundredQuestions(createScoreCards(0));
            setFourHundredQuestions(createScoreCards(1));
            setSixHundredQuestions(createScoreCards(2));
            setEightHundredQuestions(createScoreCards(3));
            setThousandQuestions(createScoreCards(4));
        })
        console.log(questions)
    } 
}, [questions])

  //call API to retrieve categories 
  function loadCategories() {
    API.getCategories()
    .then(res => {
        setCategories(res.data)
    })
    .catch(err => console.log(err));
  };

  //use categories to retrieve questions for each category via API
  function loadQuestions() {
    categories.forEach((category, index) => {
        console.log(`${category.id} ${index} ${typeof index}`);
        API.getQuestions(category.id)
        .then(res => {
            setQuestions([...questions, questions.push({id:category.id, questions: res.data.clues})]);
        })  
    })
  };

  //set questions into their own arrays based on point value 
  function createScoreCards(questionScoreIndex){
    let tempArray = [];
    questions.forEach((categoryQuestion)=>{
        if(categoryQuestion.questions){
            tempArray.push(categoryQuestion.questions[questionScoreIndex])
        }
    })
    return tempArray;
  }

  //after user clicks on a card, determine which state to pull from
//   function determineQuestionVal() {
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
    <div className="boardContainer">
        
        <div className="row categoryRow">
            {categories.map((cat)=>{
            return(
            <CategoryCard title={cat.title}></CategoryCard>)})}
        </div>
        <div className="row 200Row">
            {twoHundredQuestions.map((question)=>{
                return <QuestionCard level='200' question={twoHundredQuestions}></QuestionCard>
            })}
        </div>
        <div className="row 400Row">
            {fourHundredQuestions.map((question)=>{
                return <QuestionCard level='400' question={fourHundredQuestions}
                ></QuestionCard>
            })}
        </div>
        <div className="row 600Row">
            {sixHundredQuestions.map((question)=>{
                return <QuestionCard question={sixHundredQuestions} level='600'></QuestionCard>
            })}
        </div>
        <div className="row 800Row">
            {eightHundredQuestions.map((question)=>{
                return <QuestionCard question={eightHundredQuestions} level='800' ></QuestionCard>
            })}
        </div>
        <div className="row 1000Row">
            {thousandQuestions.map((question)=>{
                return <QuestionCard question={thousandQuestions} level='1000' ></QuestionCard>
            })}
        </div>
    </div>
  );
}

export default Board;

// const [modalShow, setModalShow] = useState(false);
    //API calls to get questions/answers/categories
    //push all categories into an array
    //render our categories by mapping over this array 
    // const categories = ["cat 1,", "cat2"];

    //once api requests are done to get questions for each category
    //assign answers into an array of objects -per category
    //render our 'answer' cards with hard coded values, and the question text by mapping over each of those arrays