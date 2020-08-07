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
const [playersScores, setPlayersScores] = useState([]);

function players(count) {
  const player = { name: '', score:0 };
  const newPlayerScores = [];


  for(let i = 0; i < count; i++) {
    newPlayerScores.push(player)
  }

  setPlayersScores([...newPlayerScores])
}

function updateName(name, index) {
  const newPlayerScores = playersScores;

  newPlayerScores[index].name = name;
  
  setPlayersScores([...newPlayerScores])
}
  
  const playerCounts = [1, 2, 3, 4];
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Container>
            <h3>Choose the Number of Players</h3>
            {playerCounts.map(number => (
              <Button key={String(number)} onClick={() => players(number)}>
                {number}
              </Button>
            ))}
          </Container>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <Container>
            <h1 className="mb-2">Scores</h1>
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
          <Container>
            <div className="boardDiv">
              <Board playersScores={playersScores}/>
            </div>
          </Container>
        </div>
      </div>
      </div>
  );
}

export default Play;