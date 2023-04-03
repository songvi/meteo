import { Box } from '@mui/material'
import Meteo from '../features/meteo/Meteo'
import Photo from '../features/media/Photo'
import Datetime from '../features/datetime/Datetime'

const Navbar = () => {
    return (
        <Box>
            <Stack ></Stack>
            <Datetime />
            <Meteo />
            <Photo />
        </Box>
    )
}

export default Navbar