import React, { useState } from 'react';
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import { movies, seats, slots } from '../data';
import LastBookingDetails from './LastBookingDetails';
// import { newBooking } from '../api-helpers/api';
import axios from 'axios';



const Header = () => {

    const [selectedMovie, setSelectedMovie] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [seatNumbers, setSeatNumbers] = useState({});
    




    const handleSubmit = async(event) => {
        event.preventDefault(); 
        const booking = {
            movie: selectedMovie,
            slot: selectedSlot,
            seats: seatNumbers
        };
        console.log(booking)
        // Sending bookings data to backend
        
    try {
        // Send bookings data using Axios to create new abooking
        await axios.post('/api/booking/', booking);
  
        // Clear fields after successful submission
        setSelectedMovie('');
        setSelectedSlot('');
        setSeatNumbers({});
      } catch (error) {
        console.error('Error sending booking data:', error);
      }
        
    };

    //Updates the seatNumbers state object whenever a user modifies the number of seats for a specific seat type.
    const handleSeatChange = (seat, newNumber) => {
        setSeatNumbers((prevSeatNumbers) => ({ ...prevSeatNumbers, [seat]: newNumber }));
      };
    return (
        <Box display={'flex'}>
            <Box width={'70%'}>
                <form onSubmit={handleSubmit}>
                    <div className='movie-row'>
                        <Typography type
                        >Select A Movie</Typography>
                        {movies.map((movie, i) => (
                            <div className="movie-column" key={i}
                                style={{
                                    backgroundColor: selectedMovie === movie ? 'lightblue' : 'white'
                                }}
                                onClick={() => setSelectedMovie(movie)}
                            >
                                <h3>{movie}</h3>
                            </div>
                        ))}

                    </div>
                    <div className='slot-row'>
                        <Typography>Select a Time slot</Typography>
                        {slots.map((slot, i) => (
                            <div className="slot-column" key={i}
                                style={{
                                    backgroundColor: selectedSlot === slot ? 'lightblue' : 'white'
                                }}
                                onClick={() => setSelectedSlot(slot)}>
                                <h3>{slot}</h3>
                            </div>
                        ))}
                    </div>


                    <div className='seat-row'>
                        <Typography>Select Seats</Typography>
                        {seats.map((seat, i) => (
                            <Box width="10%" className="seat-column" key={i}
                               
                            >
                                <FormLabel  >{seat}</FormLabel>
                                <TextField
                                    type="number"
                                    value={seatNumbers[seat] || 0} //defaults to 0
                                    onChange={(e) => handleSeatChange(seat, e.target.value)}
                                    variant="outlined"
                                />
                            </Box>

                        ))}
                    </div>
                    <div className="book-button">
                        <Button 
                         
                        type="submit" >
                            Book Now
                        </Button>
                    </div>
                </form>
            </Box>

            <Box width={'30%'} mx={1}>
                <LastBookingDetails />
            </Box>
        </Box>
    );
};

export default Header;