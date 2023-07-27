
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortID : {
        type: String,
        require: true,
        unique: true
    },
    redirectUrl : {
        type: String,
        require: true,
    },
    totalClick: {
        type: Number,
        //require: true
    },
    visitHistory : [{timestamp: {type :Number}}]

},{timestamps: true})

const Url = mongoose.model("url", urlSchema)

module.exports = Url;