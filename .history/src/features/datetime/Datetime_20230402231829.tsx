import Clock from 'react-clock'
import { Box, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useState } from 'react';

const Datetime = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000)

        return () => { clearInterval(interval); }
    }, [])

    return (
        <Box >
            <p>Current time</p>
            <Typography variant='h3'>{value? }</Typography>
        </Box>
    )
}

export default Datetime