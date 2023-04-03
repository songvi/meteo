import { Box, Stack } from '@mui/material'
import Meteo from '../features/meteo/Meteo'
import Photo from '../features/media/Photo'
import Datetime from '../features/datetime/Datetime'

const Navbar = () => {
    return (
        <Box>
            <Stack direction={'row'}>
                <Stack p={2} spacing={2} direction={'column'} justifyContent={}>
                    <Datetime />
                    <Meteo />
                </Stack>
                <Photo />
            </Stack>
        </Box>
    )
}

export default Navbar