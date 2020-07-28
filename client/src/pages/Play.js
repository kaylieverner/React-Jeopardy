import React from "react";
import {Box, DropButton, Select, Table, TableHeader, TableRow, TableCell, TableBody, TextInput} from 'grommet';
import ScoreContainer from "../components/ScoreContainer/ScoreContainer";
import PlayerScore from "../components/PlayerScore/PlayerScore";

// set up game board 
// API calls to get questions/answers/categories
// Player scores
// Save scores to DB 

function Play() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
        <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="all">
              <Select
                placeholder="Category"
                options={['option 1', 'option 2', 'option 3']}
                // value={value}
                // onChange={({ option }) => setValue(option)}
              />
            </TableCell>
            <TableCell scope="col" border="all">
              <Select
                placeholder="Category"
                options={['option 1', 'option 2', 'option 3']}
                // value={value}
                // onChange={({ option }) => setValue(option)}
              />
            </TableCell>
            <TableCell scope="col" border="all">
              <Select
                  placeholder="Category"
                  options={['option 1', 'option 2', 'option 3']}
                  // value={value}
                  // onChange={({ option }) => setValue(option)}
                />
            </TableCell>
            <TableCell scope="col" border="all">
              <Select
                  placeholder="Category"
                  options={['option 1', 'option 2', 'option 3']}
                  // value={value}
                  // onChange={({ option }) => setValue(option)}
                />
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
        <TableRow>
            <TableCell scope="row" border="all">
              Chris
            </TableCell>
            <TableCell border="all">Watermelon</TableCell>
            <TableCell border="all">Watermelon</TableCell>
            <TableCell border="all">Watermelon</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row" border="all">
              Chris
            </TableCell>
            <TableCell border="all">Watermelon</TableCell>
            <TableCell border="all">Watermelon</TableCell>
            <TableCell border="all">Watermelon</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row" border="all">
              Chris
            </TableCell>
            <TableCell border="all">Watermelon</TableCell>
            <TableCell border="all">Watermelon</TableCell>
            <TableCell border="all">Watermelon</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row" border="all">
            Chris
            </TableCell>
            <TableCell border="all">Watermelon</TableCell>
            <TableCell border="all">Watermelon</TableCell>
            <TableCell border="all">Watermelon</TableCell>
          </TableRow>
        </TableBody>
      </Table>
        </div>
      </div>

      <div className="row">
        <div className="col mt-5">
          <ScoreContainer>
            <h1 className="mb-2">Scores</h1>
            <Box direction="row-responsive" gap="small">
              <PlayerScore></PlayerScore>
              <PlayerScore></PlayerScore>
              <PlayerScore></PlayerScore>
              <PlayerScore></PlayerScore>
            </Box>
          </ScoreContainer>
        </div>
      </div>
      </div>

  );
}

export default Play;