import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

//https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_night@2x.png
const Current = () => {
    return (
        <Box bgcolor={'lightgray'} mb={1}>
            <Stack direction={'row'} justifyContent={'center'}>
                <img src='https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png' />
                <Stack direction={'column'}>
                    <Typography variant='h3'>23°</Typography>                
                    <Typography >12° - 30°</Typography>                
                    <Typography >9 km/h</Typography>                
                    </Stack>
            </Stack>

        </Box>
    )
}

export default Current