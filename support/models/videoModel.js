'use strict';
const chalk = require('chalk');//For Displaying Logs in different Colors
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let videoSchema = new Schema({
  videoId:{
    type: String,
    default: '',
    required: true ,
    index: {unique: true}
  },
  videoName: {
    type: String,
    default:'',
    required:true
  },
  videoPath: {
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
  isConfigured : {
    type: Boolean,
    default: false
   },
});

module.exports = mongoose.model('videos', videoSchema);
