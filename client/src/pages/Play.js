import React from "react";
import {Box, DropButton, Select, Table, TableHeader, TableRow, TableCell, TableBody, TextInput} from 'grommet';
import Container from "../components/Container/Container";
import PlayerScore from "../components/PlayerScore/PlayerScore";
import BoardCategory from "../components/BoardCategory/BoardCategory";
import Board from "../components/Board/Board";

// set up game board 
// API calls to get questions/answers/categories
// Player scores
// Save scores to DB 

function Play() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Container>
            <div className="boardDiv">
              <Board/>
            </div>
          </Container>
        </div>
      </div>

      <div className="row">
        <div className="col mt-5">
          <Container>
            <h1 className="mb-2">Scores</h1>
            <Box direction="row-responsive" gap="small">
              <PlayerScore></PlayerScore>
              <PlayerScore></PlayerScore>
              <PlayerScore></PlayerScore>
              <PlayerScore></PlayerScore>
            </Box>
          </Container>
        </div>
      </div>
      </div>

  );
}

export default Play;