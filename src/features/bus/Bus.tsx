import { Card, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Bus = () => {
    return (
        <Card sx={{ display: 'flex', border: '1px', padding: '2' , backgroundColor:'aliceblue'}}>
            <CardContent >
                <Typography >Point du Lac</Typography>
                <Typography style={{ verticalAlign: "middle" }}>Bus<KeyboardDoubleArrowRightIcon /> Créteil Préfecture</Typography>
                <Typography variant='h5' align='right'>5"-10"</Typography>
            </CardContent>
        </Card>
    )
}

export default Bus