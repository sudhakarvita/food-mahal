const mongoose = require("mongoose")

const booktableSchema = new mongoose.Schema({
   guestdetails:{
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
        date:{
            type: String,
            require:true
        },
        tablenumber:{
            type:Number,
            require:true
        }
   } 
},
    { timestamps: true }
)

module.exports = mongoose.model("booktable",booktableSchema)