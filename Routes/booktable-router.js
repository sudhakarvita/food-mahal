const express = require("express")
const booktable = require("../Model/bookingtable-model")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:9000', ]
};


// //creating booktable

router.post('/booktable/create',cors(corsOptions), (req, res) => {
  const newtable = new booktable(req.body);
  newtable.save();
  res.status(201).json(newtable);
});



module.exports = router