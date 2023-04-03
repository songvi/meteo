import React from 'react'
import { Box, Stack } from '@mui/material'
import Meteo from '../features/meteo/Meteo'
import Photo from '../features/media/Photo'

const Navbar = () => {
    return (
        <Stack direction={'column'}>
            <Meteo />
            <Photo />
            <
        </Stack>
    )
}

export default Navbar