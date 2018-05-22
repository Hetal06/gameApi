'use strict';
const chalk = require('chalk'); //For Displaying Logs in different Colors

module.exports = function(app) {
  let register = require('../controllers/registerController');

  //registration  Routes
  app.route('/registrations')
    .get(register.list_all_register)
    .post(register.create_user_register);

  app.route('/registrations/:registrationId')
    .get(register.read_user_register)
    .put(register.update_user_register)
    .delete(register.delete_user_register);

  app.route('/login')
      .post(register.login);
};
