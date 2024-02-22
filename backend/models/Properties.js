const mongoose = require('mongoose');

const propertiesSchema = new mongoose.Schema({
  text : {
    type : String,
    required : true
  },
  image : {
    type : String,
    required : false
  },
  location : {
    type : String,
    required : true
  },
  price : {
    type : Number,
    required : true
  },
  parking : {
    type : Number,
    required : false
  },
  rooms : {
    type : Number,
    required : false
  },
  bathrooms : {
    type : Number,
    required : false
  },
  }
);

module.exports = Properties = mongoose.model('properties', propertiesSchema);