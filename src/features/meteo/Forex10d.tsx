import { Box, Stack, Typography, styled } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'

const Forex10d = () => {
  const GrandStack = styled(Stack)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }))
  return (
    <GrandStack direction={'column'} bgcolor={'lightskyblue'}>
      <Stack direction={'row'} justifyContent={'space-between'} alignContent={'center'} alignItems={'center'}>
        <Typography>1 pm</Typography>
        <img style={{ width: '32px' }} src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png" />
        <Typography>22°</Typography>
      </Stack>      
    </GrandStack>
  )
}

export default Forex10d