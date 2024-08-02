import React from "react";
import './App.css';
import { Box, Typography } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import BookingForm from "./components/BookingForm";



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
      <BookingForm />
      <ToastContainer position='top-right' theme='dark' />
    </Box>
  )
}


export default App;