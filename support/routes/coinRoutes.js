'use strict';
const chalk = require('chalk'); //For Displaying Logs in different Colors

module.exports = function(app) {
  let coin = require('../controllers/coinController');

  //registration  Routes
  app.route('/coins')
    .get(coin.list_all_coin)
    .post(coin.create_user_coin);

  app.route('/registrations/:registrationId')
    .get(coin.read_user_coin)
    .put(coin.update_user_coin)
    .delete(coin.delete_user_coin);
};
