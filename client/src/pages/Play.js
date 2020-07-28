import React from "react";
import {Box, Table, TableHeader, TableRow, TableCell, TableBody, TextInput} from 'grommet';
import ScoreContainer from "../components/ScoreContainer/ScoreContainer";

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
              Category 1
            </TableCell>
            <TableCell scope="col" border="all">
              Category 2
            </TableCell>
            <TableCell scope="col" border="all">
              Category 3
            </TableCell>
            <TableCell scope="col" border="all">
              Category 4
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
              <TextInput placeholder="Name"/>
              <TextInput placeholder="Name"/>
              <TextInput placeholder="Name"/>
              <TextInput placeholder="Name"/>
            </Box>
            <Box direction="row-responsive" gap="small">
              <div className="p1Score">100</div>
              <div className="p1Score">100</div>
              <div className="p1Score">100</div>
              <div className="p1Score">100</div>
            </Box>
          </ScoreContainer>
        </div>
      </div>
      </div>

  );
}

export default Play;