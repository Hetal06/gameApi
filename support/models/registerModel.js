'use strict';
const chalk = require('chalk');//For Displaying Logs in different Colors
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RegistrationSchema = new Schema({
  userId:{
    type: String,
    default: '',
    required: true ,
    index: {unique: true}
  },
  userName: {
    type: String,
    default:'',
    required:true,
  },
  password: {
    type: String,
    default:'',
    required:true
  },
  email:  {
     type: String,
     default: '',
     required: true,
     index: {unique: true}
   },
  contactNo: {
     type: String,
     default: ''
   },
  firstName: {
    type: String,
    default:'',
    required:true
  },
  lastName: {
    type: String,
    default:''
  },
  spinId: {
    type: String,
    default: '0',
    required: true ,
    index: {unique: true}
  },
  videoId: {
    type: String,
    default: '0',
    required: true ,
    index: {unique: true}
  },
  coinId: {
    type: Number,
    default: '2000',
    required: true ,
    index: {unique: true}
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
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
  //   default: ['pending']
  // }
});

module.exports = mongoose.model('Registrations', RegistrationSchema);
