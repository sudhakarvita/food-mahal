const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const cors = require('cors')
const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL)
    .then(console.log("db connected succesfully"))
    .catch(err => {
        console.log("error",err)
    })

const Booktable = require("./Routes/booktable-router")
const Bookhotel = require("./Routes/bookinghotel-router")
const Bookhall = require("./Routes/bookhall-router")

app.use(express.json())

app.use(cors()) 

let corsOptions = {
    origin: [ 'http://localhost:9000', ]
};

 app.use("/",cors(corsOptions),  Booktable)
 app.use("/",cors(corsOptions),  Bookhotel)
 app.use("/",cors(corsOptions),  Bookhall)

//port
app.listen(9000, (req, res) => {
    console.log("welcome foodmahal backend on port 9000")
})