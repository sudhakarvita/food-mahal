const mongoose = require("mongoose")

const bookhotelSchema = new mongoose.Schema({
   personaldetails:{
        fisrtname:{
            type:String,
            require:true
        },
        lastname:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        mobileno:{
            type: Number,
            require: true
        },
    },
   bookingdetails:{
        howmanyrooms:{
            type: Number,
            require:true
        },
        checkindateandtime:{
            type: String,
            require:true
        },
        checkoutdateandtime:{
            type: String,
            require:true
        },
   } 
},
    { timestamps: true }
)

module.exports = mongoose.model("bookinghotel",bookhotelSchema)