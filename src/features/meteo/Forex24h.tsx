import { Box, Stack, Typography, styled } from '@mui/material'


const Forex24h = (props: {items: Array<Map<string,string>>}) => {
  const GrandStack = styled(Stack)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }))

  const stack = props.items.map((item) => {
    return (
      <Stack direction={'row'}  justifyContent={'space-between'}>
        <Typography>{item.get("Index")}</Typography>
        <Box ><img style={{ width: '32px' }} src={item.get("Ciel")} /></Box>
        <Typography>{item.get("TempMin")} - {item.get("TempMax")}</Typography>
      </Stack>
    )
  })
  return (
    <GrandStack direction={'column'} bgcolor={'lightskyblue'}>
      {stack}
    </GrandStack>
  )
}

export default Forex24h