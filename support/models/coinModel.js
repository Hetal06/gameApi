'use strict';
const chalk = require('chalk');//For Displaying Logs in different Colors
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let CoinSchema = new Schema({
  coinId:{
    type: String,
    default: '',
    required: true ,
    index: {unique: true}
  },
  coinValue: {
    type: String,
    default:'',
    required:true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('Coins', CoinSchema);
