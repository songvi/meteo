import { Box, Stack, styled } from '@mui/material'
import Meteo from '../features/meteo/Meteo'
import Photo from '../features/media/Photo'
import Datetime from '../features/datetime/Datetime'
import Location from '../features/location/Location'
import Bus from '../features/bus/Bus'
import Note from '../features/note/Note'

const Navbar = () => {
    const weatherJson = {
        "Index": "Thursday",
        "Temp": "13",
        "TempMax": "15°",
        "TempMin": "7°",
        "Humidity": "60%",
        "Ciel": "https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/mostly_cloudy_day_night@2x.png",
        "WindSpeed": "16 km/h WSW",
        "WindDirection": "",
        "Presure": "1017.3 millibars",
        "ReadFeel": "51°",
        "UVIndex": "0 (Low)",
        "Visibility": "10.00 miles",
        "SunSet": "",
        "SunRise": "",
        "Moon": "",
        "Comment": "",
        "Precipitation": ""
      }
    
    const w = new Map<string, string>(Object.entries(weatherJson));

    const f = [w, w, w, w]
    
    return (
        <Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} padding={1}>
                <Note />
                <Note />
                <Note />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Stack spacing={1} direction={'column'} justifyContent={'top'}>
                    <Location />
                    <Datetime />
                    <Meteo current={{weather: w}} forex={f}/>
                </Stack>
                <Photo />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Bus />
                <Bus />
                <Bus />
            </Stack>
        </Box>
    )
}

export default Navbar