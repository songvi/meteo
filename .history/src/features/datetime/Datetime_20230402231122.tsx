import Clock from 'react-clock'
import { Box } from '@mui/material'
import { useEffect } from 'react';

const Datetime = () => {
    const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(()= > setValue={(new Date(), 1000);
        return () => {
            clearInterval(interval);
        }
        })
    })
    return (
        <Box flex={2}>
            <Clock />
        </Box>
    )
}

export default Datetime