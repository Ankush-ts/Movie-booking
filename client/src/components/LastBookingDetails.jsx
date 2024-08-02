import React, { memo, useEffect, useState } from 'react';
import { getAllBookings } from '../api-helpers/api';
import '../App.css';
import { Box, Typography } from '@mui/material';


const LastBookingDetails = memo(() => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    getAllBookings().then(setBookings)
      .catch((err) => console.log(err));
  }, [bookings]);




  return (
    <div className='last-order'>
      <Box>
        <h4>Last Booking Details</h4>
        {bookings?.length > 0 ? (
          <div key={bookings.length - 1}>
            <Typography component="li">Seats:</Typography>
            <ul>
              {Object.entries(bookings[bookings.length - 1].seats).map(([seat, availability]) => (
                <li key={seat}>{seat}: {availability}</li>
              ))}
            </ul>
            <Typography component="li">Slot: {bookings[bookings.length - 1].slot}</Typography>
            <Typography component="li">Movie: {bookings[bookings.length - 1].movie}</Typography>
          </div>
        ) : (
          <h5>No Last Bookings</h5>
        )}
      </Box>
    </div>

  );
});

export default LastBookingDetails;