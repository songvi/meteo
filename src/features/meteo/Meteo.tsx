import { Box } from '@mui/material';
import Current from './Current';
import Forex24h from './Forex24h';

export type WeatherProps = {
  current: {
    weather: Map<string, string>
  }
  forex: Array<Map<string,string>>
}

const Meteo = (props: WeatherProps) => {
  return (
    <Box justifyContent={'center'} bgcolor={''}>
      <Current weather={props.current.weather} />
      <Forex24h items={props.forex} />
    </Box>
  )
}

export default Meteo