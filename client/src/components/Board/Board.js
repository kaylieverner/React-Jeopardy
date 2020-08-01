import React, {useEffect, useState} from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import QuestionCard from "../QuestionCard/QuestionCard";
import API from "../../utils/API";

function Board() {
const [categories, setCategories] = useState([]);
const [questions, setQuestions] = useState([]);
const [oneHundredQuestions, setOneHundredQuestions] = useState([]);
const [twoHundredQuestions, setTwoHundredQuestions] = useState([]);
const [threeHundredQuestions, setThreeHundredQuestions] = useState([]);
const [fourHundredQuestions, setFourHundredQuestions] = useState([]);
const [fiveHundredQuestions, setFiveHundredQuestions] = useState([]);


useEffect(() => {
    loadCategories()
    
  }, [])

  useEffect(() => {
      loadQuestions()
  }, [categories])

  useEffect(() => {
    if(questions.length > 5){
        categories.forEach(()=>{
            setOneHundredQuestions(createScoreCards(0));
            setTwoHundredQuestions(createScoreCards(1));
            setThreeHundredQuestions(createScoreCards(2));
            setFourHundredQuestions(createScoreCards(3));
            setFiveHundredQuestions(createScoreCards(4));
        })
        console.log(questions)
    }
}, [questions])

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
    return tempArray
  }
  
  

  return (
    <div className="boardContainer">
        <div className="row categoryRow">
            {categories.map((cat)=>{
            return(
            <CategoryCard title={cat.title}></CategoryCard>)})}
        </div>
        <div className="row 200Row">
            {oneHundredQuestions.map((question)=>{
                return <QuestionCard question={question} level='100'></QuestionCard>
            })}
        </div>
        <div className="row 200Row">
            {twoHundredQuestions.map((question)=>{
                return <QuestionCard question={question} level='200'></QuestionCard>
            })}
        </div>
        <div className="row 200Row">
            {threeHundredQuestions.map((question)=>{
                return <QuestionCard question={question} level='300'></QuestionCard>
            })}
        </div>
        <div className="row 200Row">
            {fourHundredQuestions.map((question)=>{
                return <QuestionCard question={question} level='400'></QuestionCard>
            })}
        </div>
        <div className="row 200Row">
            {fiveHundredQuestions.map((question)=>{
                return <QuestionCard question={question} level='500'></QuestionCard>
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