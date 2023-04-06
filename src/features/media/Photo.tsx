import { Box } from '@mui/material'
import React from 'react'

const Photo = () => {
  return (
    <Box flex={4}  sx={{ backgroundColor: 'lightblue' }}>
      <img src='https://picsum.photos/id/21/3008/2008' style={{maxWidth: '100%', height:'auto'}}/>
    </Box>
  )
}

export default Photo