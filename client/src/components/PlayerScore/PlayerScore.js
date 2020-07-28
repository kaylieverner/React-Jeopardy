import React from "react";
import {Box, TextInput, Heading} from 'grommet';

function PlayerScore(props) {
  return (
    <div>
        <Box direction="row-responsive" gap="small">
            <TextInput placeholder="Name"/>
        </Box>
        <Box direction="row-responsive" gap="small">
            <Heading margin="large">100</Heading>
        </Box>
    </div>
  );
}

export default PlayerScore;