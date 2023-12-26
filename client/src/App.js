import React from "react";
import './App.css';
import { Box, Typography } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header";



const App = () => {


  return (
    <Box>
     
      <Typography
        variant='h3'
        fontFamily={'cursive'}
        textAlign={'left'}
        padding={2}
      >Book that Show !
      </Typography>
      <Header />
      
    </Box>
  )
}


export default App;