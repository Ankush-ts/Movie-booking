import React, { memo, useEffect, useState } from 'react';
import { getAllBookings } from '../api-helpers/api';
import '../App.css';
import { Box, Typography } from '@mui/material';


const LastBookingDetails = memo(() => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    getAllBookings().then(setBookings)
      .catch((err) => console.log(err));
  }, []);
  console.log();



  return (
   
    <div className='last-order'>
      <Box>
        <h4>Last Booking Details</h4>
        {bookings?.length > 0 ? (

          <Typography key={bookings.length - 1}>
            <li>Seats:</li>
            <ul>
              {Object.entries(bookings[bookings.length - 1].seats).map(([seat, availability]) => (
                <li key={seat}>{seat}: {availability}</li>
              ))}
            </ul>
            <li>Slot: {bookings[bookings.length - 1].slot}</li>
            <li>Movie: {bookings[bookings.length - 1].movie}</li>
          </Typography>
        ) : (
          <h5>No Last Bookings</h5>
        )}
      </Box>
    </div>

  );
});

export default LastBookingDetails;