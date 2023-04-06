import Clock from 'react-clock'
import { Box, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useState } from 'react';

const timezone = 'Europe/Paris'
const lang = 'en'
const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

const Datetime = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000)

        return () => { clearInterval(interval); }
    }, [])

    return (
        <Box maxHeight={80} flex={2} alignContent={'center'} justifyContent={'center'} bgcolor={'lightcoral'}>
            <Typography variant='h5'>{value? value.toLocaleDateString('vi-VI', options): ""}</Typography>
            <Typography variant='h5'>{value ? value.toLocaleTimeString('vi', { timeZone : timezone}) : ""}</Typography>
        </Box>
    )
}

export default Datetime