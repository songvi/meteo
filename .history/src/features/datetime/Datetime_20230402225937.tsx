import Clock from 'react-live-clock'
import React from 'react'
import { Box } from '@mui/material'

const Datetime = () => {
    return (
        <Box flex={2}>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Paris'} />
        </Box>
    )
}

export default Datetime