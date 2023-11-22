const mongoose = require("mongoose")

const booktableSchema = new mongoose.Schema({
    tableno:{
        type:String,
        require:true
    },
    price:{
        type: Number,
        require: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("booktable",booktableSchema)