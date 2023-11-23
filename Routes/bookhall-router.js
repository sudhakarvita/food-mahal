const express = require("express")
const bookhall = require("../Model/bookhall-model")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:9000', ]
};


// //creating bookhotel

router.post('/bookhall/create',cors(corsOptions), (req, res) => {
  const hallbooking = new bookhall(req.body);
  hallbooking.save();
  res.status(201).json(hallbooking);
});



module.exports = router