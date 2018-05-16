'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RegistrationSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  lastName: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  mobileNo: {
    type: Number,
    required: 'Kindly enter the name of the task'
  },
  coin: {
    type: Number,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Registrations', RegistrationSchema);
