import axios from 'axios';

//----get all bookings
export const getAllBookings = async () => {
    const res = await axios
        .get("/api/booking")
        .catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("No data")
    }
    const data = await res.data;
    return data;
}


//---create booking----

export const newBooking = async (data) => {
    const res = await axios.post('/api/booking/', {
        movie: data.movie,
        slot: data.slot,
        seats: data.seats
    })

        .catch((err) => console.log('Error sending booking data:', err));

    if (res.status !== 201) {
        return console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;

};



