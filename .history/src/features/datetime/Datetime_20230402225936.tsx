import Clock from 'react-live-clock'
import React from 'react'
import { Box } from '@mui/material'

const Datetime = () => {
    return (
        <Box flex={}>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Paris'} />
        </Box>
    )
}

export default Datetime