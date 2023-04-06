import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const Note = () => {
    return (
        <Card sx={{ display: 'flex', border: '1px', padding: '2', backgroundColor: 'lemonchiffon' }}>
            <CardContent >
                <Typography >Important note</Typography>
            </CardContent>
        </Card>
    )
}

export default Note