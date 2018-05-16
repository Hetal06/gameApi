'use strict';


var mongoose = require('mongoose'),
  Registrations = mongoose.model('Registrations');

exports.list_all_register = function(req, res) {
  Registrations.find({}, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};




exports.create_a_register = function(req, res) {
  var new_register = new Registrations(req.body);
  new_register.save(function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.read_a_register = function(req, res) {
  Registrations.findById(req.params.registerId, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.update_a_register = function(req, res) {
  Registrations.findOneAndUpdate({_id: req.params.registerId}, req.body, {new: true}, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.delete_a_register = function(req, res) {


  Registrations.remove({
    _id: req.params.registerId
  }, function(err, register) {
    if (err)
      res.send(err);
    res.json({ message: 'Registrations successfully deleted' });
  });
};
