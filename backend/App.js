const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors');
app.use(cors())


//middlewares
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send('<h1>Hello</h1>')
// })


//create a booking
app.post("/api/booking", async(req,res)=>{
    try {
      const { movie, slot, seats } = req.body;
    
      const newBooking = new connection({ movie, slot, seats });
      await newBooking.save();

      res.status(201).json({ message: "Booking successful!", booking: newBooking });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
  }
})


//get booking details
app.get("/api/booking", async (req, res) => {

  try {
      const bookings = await connection.find();
      // if (!bookings.length) {
      //   return res.status(404).json({ error: "No bookings found" });
      // }
      res.json(bookings);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve bookings" });
    
  }
});



app.listen(port, () =>{ console.log(`App listening on port ${port}!`)
});