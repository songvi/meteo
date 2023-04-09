import { Box } from '@mui/material';
import Current from './Current';
import Forex24h from './Forex24h';
import { Meteo } from './types';


const MeteoComp = (props: Meteo) => {
  return (
    <Box justifyContent={'center'} bgcolor={''}>
      <Current weather={props.current.weather} />
      <Forex24h items={props.forex} />
    </Box>
  )
}

export default MeteoComp