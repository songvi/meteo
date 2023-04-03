import Clock from 'react-clock'
import { Box } from '@mui/material'

const Datetime = () => {
    const [value, setValue] = useState(new Date());
    
    return (
        <Box flex={2}>
            <Clock />
        </Box>
    )
}

export default Datetime