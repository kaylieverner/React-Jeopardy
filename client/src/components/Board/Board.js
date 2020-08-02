import React, {useEffect, useState} from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import QuestionCard from "../QuestionCard/QuestionCard";
import QuestionModal from "../QuestionModal/QuestionModal";
import API from "../../utils/API";

function Board() {
const [categories, setCategories] = useState([]);
const [questions, setQuestions] = useState([]);
const [modalShow, setModalShow] = useState(false);
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
    if(questions.length > 5 ){
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

useEffect(() => {
    console.log(twoHundredQuestions)
  }, [twoHundredQuestions])

  function loadCategories() {
    API.getCategories()
    .then(res => {
        setCategories(res.data)
    })
    .catch(err => console.log(err));
  };

  function loadQuestions() {
    categories.forEach((category, index) => {
        console.log(`${category.id} ${index} ${typeof index}`);
        API.getQuestions(category.id)
        .then(res => {
            setQuestions([...questions, questions.push({id:category.id, questions: res.data.clues})]);
        })
    })
  };

  function createScoreCards(questionScoreIndex){
    let tempArray = [];
    questions.forEach((categoryQuestion)=>{
        if(categoryQuestion.questions){
            tempArray.push(categoryQuestion.questions[questionScoreIndex])
        }
    })
    return tempArray;
  }
  
  return (
    <div className="boardContainer">
        <QuestionModal  show={modalShow}
        onHide={() => setModalShow(false)}
        twoHundredQuestions={twoHundredQuestions}
        ></QuestionModal>
        <div className="row categoryRow">
            {categories.map((cat)=>{
            return(
            <CategoryCard title={cat.title}></CategoryCard>)})}
        </div>
        <div className="row 200Row">
            {twoHundredQuestions.map((question)=>{
                return <QuestionCard question={questions.question} level='200' setModalShow={setModalShow}>
                </QuestionCard>
            })}
        </div>
        <div className="row 400Row">
            {fourHundredQuestions.map((question)=>{
                return <QuestionCard question={question} level='400' setModalShow={setModalShow}></QuestionCard>
            })}
        </div>
        <div className="row 600Row">
            {sixHundredQuestions.map((question)=>{
                return <QuestionCard question={question} level='600' setModalShow={setModalShow}></QuestionCard>
            })}
        </div>
        <div className="row 800Row">
            {eightHundredQuestions.map((question)=>{
                return <QuestionCard question={question} level='800' setModalShow={setModalShow}></QuestionCard>
            })}
        </div>
        <div className="row 1000Row">
            {thousandQuestions.map((question)=>{
                return <QuestionCard question={question} level='1000' setModalShow={setModalShow}></QuestionCard>
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