import React, {useState} from "react";
import {Box} from 'grommet';
import Container from "../components/Container/Container";
import PlayerScore from "../components/PlayerScore/PlayerScore";
import Board from "../components/Board/Board";
import { Button } from 'react-bootstrap';

// set up game board 
// API calls to get questions/answers/categories
// Player scores
// Save scores to DB 

function Play() {
const [numOfPlayers, setNumOfPlayers] = useState("0");

function players(event) {
  console.log("clicked")
  setNumOfPlayers(event.target.id)
  console.log(numOfPlayers)
}

function renderPlayerCards(){
  if (numOfPlayers === "1") {
    return <Box direction="row-responsive" gap="small"><PlayerScore/></Box>
  } else if (numOfPlayers === "2") {
    return <Box direction="row-responsive" gap="small"><PlayerScore/><PlayerScore/></Box>
  } else if (numOfPlayers === "3") {
    return <Box direction="row-responsive" gap="small"><PlayerScore/><PlayerScore/><PlayerScore/></Box>
  } else if (numOfPlayers === "4") {
    return <Box direction="row-responsive" gap="small"><PlayerScore/><PlayerScore/><PlayerScore/><PlayerScore/></Box>
  } else {
    return <p>Select Number of Players</p>;
  }
};
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Container>
            <h3>Choose the Number of Players</h3>
            <Button color="primary" className="onePlayers" id="1" onClick={players}>1</Button>
            <Button color="primary" className="twoPlayers" id="2" onClick={players}>2</Button>
            <Button color="primary" className="threePlayers" id="3" onClick={players}>3</Button>
            <Button color="primary" className="fourPlayers" id="4" onClick={players}>4</Button>
          </Container>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <Container>
            <h1 className="mb-2">Scores</h1>
            {renderPlayerCards()}
          </Container>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5">
          <Container>
            <div className="boardDiv">
              <Board/>
            </div>
          </Container>
        </div>
      </div>
      </div>

  );
}

export default Play;