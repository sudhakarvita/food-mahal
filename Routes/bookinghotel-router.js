const express = require("express")
const bookhotel = require("../Model/bookinghotel-model")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:9000', ]
};


// //creating bookhotel

router.post('/bookhotel/create',cors(corsOptions), (req, res) => {
  const newbooking = new bookhotel(req.body);
  newbooking.save();
  res.status(201).json(newbooking);
});



module.exports = router