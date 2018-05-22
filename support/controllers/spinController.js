'use strict';


const mongoose = require('mongoose'),
  Spin = mongoose.model('Spin');

exports.list_all_spin = function(req, res) {
  Spin.find({}, function(err, spin) {
    if (err)
      res.send(err);
    res.json(spin);
  });
};




exports.create_user_spin = function(req, res) {
  let new_spin = new Spin(req.body);
  new_spin.save(function(err, spin) {
    if (err)
      res.send(err);
    res.json(spin);
  });
};


exports.read_user_spin = function(req, res) {
  Spin.findById(req.params.spinId, function(err, spin) {
    if (err)
      res.send(err);
    res.json(spin);
  });
};


exports.update_user_spin = function(req, res) {
  Spin.findOneAndUpdate({_id: req.params.spinId}, req.body, {new: true}, function(err, spin) {
    if (err)
      res.send(err);
    res.json(spin);
  });
};


exports.delete_user_spin = function(req, res) {


  Spin.remove({
    _id: req.params.spinId
  }, function(err, spin) {
    if (err)
      res.send(err);
    res.json({ message: 'Spin successfully deleted' });
  });
};
