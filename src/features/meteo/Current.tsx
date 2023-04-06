import { Box, Stack, Typography, styled } from '@mui/material'


const Current = (props: {weather: Map<string, string>}) => {
    return (
        <Box bgcolor={'darkturquoise'} mb={1}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <img src='https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png' />
                <Stack direction={'column'}>
                    <Typography variant='h3'>{props.weather.get("Temp")}</Typography>
                    <Typography >{props.weather.get("TempMin")} - {props.weather.get("TempMax")}</Typography>
                    <Typography >{props.weather.get("WindSpeed")}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Current