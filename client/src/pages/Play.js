import React, {useState} from "react";
import {Box} from 'grommet';
import Container from "../components/Container/Container";
import PlayerScore from "../components/PlayerScore/PlayerScore";
import Board from "../components/Board/Board";
import { Button } from 'react-bootstrap';
import "./style.css";

function Play() {
const [playersScores, setPlayersScores] = useState([]);
const playerCounts = [1, 2, 3, 4];

function players(count) {
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
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col mb-5">
          <Container>
          <Box direction="row-responsive" gap="small">
            <h3>Choose the Number of Players</h3>
            {playerCounts.map(number => (
              <Button className="m-2" key={String(number)} onClick={() => players(number)}>
                {number}
              </Button>
            ))}
            </Box>
          </Container>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <Container>
            <h3 className="mb-2">Scores</h3>
            <Box direction="row-responsive" gap="small">
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
      </div>
  );
}

export default Play;