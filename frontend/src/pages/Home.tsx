import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import TypingAnim from '../components/typer/TypingAnim'
import Footer from '../components/footer/Footer'


const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box width={'100%'} height={'100%'}>
      <Box sx={{display: 'flex', width: "95%", flexDirection: "column", alignItems: "center", mx: "auto", mt: 4}}>
        <TypingAnim />
      </Box>
      <Box sx={{width: '100%', display: "flex", flexDirection: {md: "row", xs: "column", sm: "column"}, gap: 5, my: 10,}}>
        <img src="robot2.png" alt="robot" style={{ width: "200px", margin: "auto" }}/>
        <img className='rotate' src="infinity.png" alt="robot" style={{ width: "200px", margin: "auto" }}/>
      </Box>
      <Box sx={{ display: "flex", width: "100%", mx: "auto"}}>
        <video muted loop autoPlay style={{display: "flex", margin: "auto", width: isBelowMd? "80%": "60%", borderRadius: 28, boxShadow: "-5px -5px 105px #64f3d5", marginTop: 20, marginBottom: 20}} ><source src="chat.mp4" type="video/mp4" /></video>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
