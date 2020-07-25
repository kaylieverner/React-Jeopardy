import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import {Box, Table, TableHeader, TableRow, TableCell, TableBody, DataTable, Text, Meter} from 'grommet';

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

      <DataTable
  columns={[
    {
      property: 'name',
      header: <Text>Name</Text>,
      primary: true,
    },
    {
      property: 'percent',
      header: 'Points',
      render: datum => (
        <Box pad={{ vertical: 'xsmall' }}>
          <Meter
            values={[{ value: datum.percent }]}
            thickness="small"
            size="small"
          />
        </Box>
      ),
    },
  ]}
  data={[
    { name: 'Player 1', percent: 20 },
    { name: 'Player 2', percent: 30 },
    { name: 'Player 3', percent: 40 },
    { name: 'Player 4', percent: 80 },
  ]}
/>
    </Box>
  );
}

export default Play;