import React from 'react'
import { Box, Stack } from '@mui/material'
import Meteo from '../features/meteo/Meteo'
import Photo from '../features/media/Photo'
import Datetime from '../features/datetime/Datetime'

const Navbar = () => {
    return (
        <Stack direction={'row'}>
            <Datetime  />
            <Meteo />
            <Photo />        
        </Stack>
    )
}

export default Navbar