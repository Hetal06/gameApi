'use strict';
const chalk = require('chalk'); //For Displaying Logs in different Colors

module.exports = function(app) {
  let spin = require('../controllers/spinController');

  //registration  Routes
  app.route('/spins')
    .get(spin.list_all_spin)
    .post(spin.create_user_spin);

  app.route('/spins/:spinId')
    .get(spin.read_user_spin)
    .put(spin.update_user_spin)
    .delete(spin.delete_user_spin);
};
