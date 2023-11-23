const mongoose = require("mongoose")

const bookhallSchema = new mongoose.Schema({
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
        occasiondate:{
            type: String,
            require:true
        },
        numberofhalls:{
            type: Number,
            require:true
        },
        occasion:{
            type: String,
            require:true
        },
        hallcapasity:{
            type: Number,
            require:true
        },
   } 
},
    { timestamps: true }
)

module.exports = mongoose.model("bookhall",bookhallSchema)