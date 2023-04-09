import { useGetMeteoQuery } from '../features/meteo/meteoApi'

import { Box, Stack, styled } from '@mui/material'
import MeteoComp from '../features/meteo/Meteo'
import Photo from '../features/media/Photo'
import Datetime from '../features/meteo/Datetime'
import Location from '../features/meteo/Location'
import Bus from '../features/bus/Bus'
import Note from '../features/note/Note'


const Navbar = () => {   

    const { data: meteos, isLoading, error, isFetching } = useGetMeteoQuery('creteil',
        {
            pollingInterval: 30000,
        })

    let content; 
    console.log(meteos)

    if (isLoading) {
        content = <p>Loading ...</p>
    }

    return (
        <>
            {error ? (<>Oh no, there was an error</>)
                : isLoading ? (<>Loadding...</>)
                    : meteos ? (
                        <Box>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} padding={1}>
                                <Note />
                                <Note />
                                <Note />
                            </Stack>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                                <Stack spacing={1} direction={'column'} justifyContent={'top'}>
                                    <Location />
                                    <Datetime />
                                    <MeteoComp current={{ weather: meteos[0].Meteo.current.weather }} forex={meteos[0].Meteo.forex} />
                                </Stack>
                                <Photo />
                            </Stack>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                                <Bus />
                                <Bus />
                                <Bus />
                            </Stack>
                        </Box>
                    ) : null}

        </>
    )
}

export default Navbar