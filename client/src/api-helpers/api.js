import axios from 'axios';

//----get all bookings
export const getAllBookings = async () => {
    const res = await axios
        .get("/api/booking/")
        .catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("No data")
    }
    const data = await res.data;
    return data;
}


//---create booking----

// export const newBooking = async (data) => {
//     try {
//         await axios.post('/api/booking/', {
//             movie: data.movie,
//             slot: data.slot,
//             seats: data.seat
//         });

//     } catch (error) {
//         console.error('Error sending booking data:', error);
//     }

// };

