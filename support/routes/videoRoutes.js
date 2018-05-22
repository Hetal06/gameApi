'use strict';
const chalk = require('chalk'); //For Displaying Logs in different Colors

module.exports = function(app) {
  let video = require('../controllers/videoController');

  //registration  Routes
  app.route('/videos')
    .get(video.list_all_video)
    .post(video.create_user_video);

  app.route('/videos/:videoId')
    .get(video.read_user_video)
    .put(video.update_user_video)
    .delete(video.delete_user_video);
};
