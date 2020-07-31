import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import QuestionCard from "../QuestionCard/QuestionCard";

function Board() {
  return (
    <div className="boardContainer">
        <div className="row categoryRow">
            <CategoryCard></CategoryCard>
        </div>
        <div className="row 200Row">
            <QuestionCard></QuestionCard>
        </div>
        <div className="row 400Row">
            <QuestionCard></QuestionCard>
        </div>
        <div className="row 600Row">
            <QuestionCard></QuestionCard>
        </div>
        <div className="row 800Row">
            <QuestionCard></QuestionCard>
        </div>
        <div className="row 1000Row">
            <QuestionCard></QuestionCard>
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