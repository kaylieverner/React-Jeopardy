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
const [numOfPlayers, setNumOfPlayers] = useState(0);
const playerBtn = document.getElementById("playerBtn");

function players() {
  console.log(playerBtn.getAttribute("id"))
}
  

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Container>
            <h3>Choose the Number of Players</h3>
            <Button color="primary" className="onePlayers" id="btn1" onClick={players()}>1</Button>
            <Button color="primary" className="twoPlayers" id="playerBtn" onClick={players()}>2</Button>
            <Button color="primary" className="threePlayers" id="playerBtn" onClick={players()}>3</Button>
            <Button color="primary" className="fourPlayers" id="playerBtn" onClick={players()}>4</Button>
          </Container>
          <Container>
          <h1 className="mb-2">Scores</h1>
            <Box direction="row-responsive" gap="small">
              
            </Box>
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