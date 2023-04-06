import { Box, Stack } from '@mui/material'
import Meteo from '../features/meteo/Meteo'
import Photo from '../features/media/Photo'
import Datetime from '../features/datetime/Datetime'
import Location from '../features/location/Location'

const Navbar = () => {
    return (
        <Box>
            <Stack direction={'row'} spacing={1}>
                <Stack spacing={1} direction={'column'} justifyContent={'center'}>
                    <Location />
                    <Datetime />
                    <Meteo />
                </Stack>
                <Photo />
            </Stack>
            <Box bgcolor={'lightgoldenrodyellow'}>
                <Box> BUSSS</Box>
                <Box> BUSSS</Box>
            </Box>
        </Box>
    )
}

export default Navbar