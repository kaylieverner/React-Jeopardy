import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import {Box, Table, TableHeader, TableRow, TableCell, TableBody} from 'grommet';

// set up game board 
// API calls to get questions/answers/categories
// Player scores
// Save scores to DB 

function Play() {
  return (
    <Box>
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
            <TableCell scope="row">
              <strong>Eric</strong>
            </TableCell>
            <TableCell border="all">Coconut</TableCell>
            <TableCell border="all">Coconut</TableCell>
            <TableCell border="all">Coconut</TableCell>
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

      
    </Box>
  );
}

export default Play;