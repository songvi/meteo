import { Box } from '@mui/material'
import React from 'react'

const Datetime = () => {
    return (
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    )
}

export default Datetime