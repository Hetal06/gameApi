'use strict';


const mongoose = require('mongoose'),
  videos = mongoose.model('videos');

exports.list_all_video = function(req, res) {
  videos.find({}, function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};




exports.create_user_video = function(req, res) {
  let new_video = new videos(req.body);
  new_video.save(function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};


exports.read_user_video = function(req, res) {
  videos.findById(req.params.videoId, function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};


exports.update_user_video = function(req, res) {
  videos.findOneAndUpdate({_id: req.params.videoId}, req.body, {new: true}, function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};


exports.delete_user_video = function(req, res) {


  videos.remove({
    _id: req.params.videoId
  }, function(err, video) {
    if (err)
      res.send(err);
    res.json({ message: 'Video successfully deleted' });
  });
};
