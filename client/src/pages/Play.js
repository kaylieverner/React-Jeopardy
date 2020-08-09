import React, {useState} from "react";
import {Box} from 'grommet';
import Container from "../components/Container/Container";
import PlayerScore from "../components/PlayerScore/PlayerScore";
import Board from "../components/Board/Board";
import { Button } from 'react-bootstrap';
import API from "../utils/API"
import "./style.css";

function Play() {
const [playersScores, setPlayersScores] = useState([]);
const [showNumofPlayersDiv, setShowNumOfPlayersDiv] = useState(true);
const playerCounts = [1, 2, 3, 4];

function players(count) {
  setShowNumOfPlayersDiv(false);
  const newPlayerScores = [];
  
  for(let i = 0; i < count; i++) {
    const player = { name: '', score: 0 };
    newPlayerScores.push(player)
  }

  setPlayersScores([...newPlayerScores])
}

function updateName(name, index) {
  const newPlayerScores = playersScores;

  newPlayerScores[index].name = name;
  setPlayersScores([...newPlayerScores])
}

function updateScore(score, index) {
  const newPlayerScores = playersScores;
  //current score + value 

  newPlayerScores[index].score = score;
  setPlayersScores([...newPlayerScores])
}

function endGame() {
  API.savePlayersScores(playersScores)
  //write player names and scores to database
  //update leaderboard with top five players
  //refresh page to reload play.js page 
  // for (var i = 0; i<playersScores.length; i++) {
  //   if (!playersScores[i].name) {
  //     return;
  //   }
  //   else {
  //     var newPlayerScoresData = {
  //       player: playersScores[i].name,
  //       score: playersScores[i].score
  //     };

  //     API.savePlayersScores(newPlayerScoresData)
  //   }
  // }
  // if (playersScores)
  // API.savePlayersScores().then(res => {
  //   console.log(res)
  // })
  // .catch(err => console.log(err))
}
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col mb-5 text-center numOfPlayers">
            {showNumofPlayersDiv ? <Container>
            <h3>Choose the Number of Players</h3>
            {playerCounts.map(number => (
              <Button className="m-2 playerNumBtn" key={String(number)} onClick={() => players(number)}>
                {number}
              </Button>
            ))} </Container>: null}
        </div>
      </div>
      {showNumofPlayersDiv ? null : <div><div className="row">
        <div className="col text-center">
          <Container>
            <h3 className="mb-2 scores">Scores</h3>
            <Box direction="row-responsive" gap="small" alignContent="center">
              {playersScores.map((player, index) => {
                return <PlayerScore player={playersScores} updateName={updateName} index={index} />
              })}
            </Box>
          </Container>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5">
            <div className="boardDiv mb-5">
              <Board playersScores={playersScores} updateScore={updateScore}/>
            </div>
        </div>
      </div> 
      <div className="row">
        <div className="col mt-5">
            <div className="mb-5 text-center">
            <Button className="m-2 endGameBtn" onClick={() => endGame()}>
                End Game
            </Button>
            </div>
        </div>
      </div>
      </div>}
      </div>
  );
}

export default Play;