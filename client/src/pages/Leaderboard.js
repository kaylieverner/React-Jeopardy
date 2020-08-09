import React from "react";
import { Col, Row, } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Box, Grommet } from "grommet";
import { Table, Container } from "reactstrap";
import "./style.css";
import API from "../utils/API"
import LeaderboardRow from "../components/LeaderboardRow/LeaderboardRow";
//log of high scores from available users 
//api routes to get and post score data the user enters 

const Board = (props) => {

  function getScores() {
    API.getPlayersScores().then(data => {
      console.log(data)
      let scores = data.data;
      console.log(scores)
      if (!scores) {
        displayNone()
      }
      else {
        displayScores(scores)
      }
    })


    // API.getPlayersScores(() => {
    //   console.log("Scores", data);
    //   if (!data || !data.length) {
    //     displayNone()
    //   }
    //   else {
    //     displayScores(data)
    //   }
    // })
  }

  function displayNone() {
    console.log("HIT")
    return <div>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>No Data Yet</td>
        <td>No Data Yet</td>
      </tr>
    </tbody>
    </div>
  }

  function displayScores(scores) {
    console.log("DISPLAY SCORES FUNCTION")
    return <div>
    <tbody>
    {scores.map((score)=>{
      return <LeaderboardRow id={score.id} player={score.player} score={score.score}/>
    })}
    </tbody>
    </div>
  }

  return (
    <Container>
    <Row>
       <Col size="md-12">
        <Jumbotron className="leaderboardJumbotron">
        <h1 className="leaderboardHeading">Leaderboard</h1>
         </Jumbotron>
        </Col>
     </Row>
​
    <Table responsive>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      {getScores()}
    </Table>
    </Container>
  );
}

export default Board;