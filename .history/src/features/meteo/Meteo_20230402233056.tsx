import { Box } from '@mui/material';
import React from 'react';
import Current from './Current';
import Forex from './Forex';

const Meteo = () => {
  return (
    <Box justifyContent={'center'} bgcolor={'lightsalmon'}  spac>
      <Current />
      <Forex />
    </Box>
  )
}

export default Meteo