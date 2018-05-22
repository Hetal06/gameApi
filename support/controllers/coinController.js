'use strict';


const mongoose = require('mongoose'),
  Coins = mongoose.model('Coins');

exports.list_all_coin = function(req, res) {
  Coins.find({}, function(err, coin) {
    if (err)
      res.send(err);
    res.json(coin);
  });
};




exports.create_user_coin = function(req, res) {
  let new_coin = new Coins(req.body);
  new_coin.save(function(err, coin) {
    if (err)
      res.send(err);
    res.json(coin);
  });
};


exports.read_user_coin = function(req, res) {
  Coins.findById(req.params.coinId, function(err, coin) {
    if (err)
      res.send(err);
    res.json(coin);
  });
};


exports.update_user_coin = function(req, res) {
  Coins.findOneAndUpdate({_id: req.params.coinId}, req.body, {new: true}, function(err, coin) {
    if (err)
      res.send(err);
    res.json(coin);
  });
};


exports.delete_user_coin = function(req, res) {


  Coins.remove({
    _id: req.params.coinId
  }, function(err, coin) {
    if (err)
      res.send(err);
    res.json({ message: 'Coins successfully deleted' });
  });
};
