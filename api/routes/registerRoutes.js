'use strict';
module.exports = function(app) {
  var register = require('../controllers/registerController');

  //registration  Routes
  app.route('/registrations')
    .get(register.list_all_register)
    .post(register.create_a_register);

  app.route('/registrations/:registrationId')
    .get(register.read_a_register)
    .put(register.update_a_register)
    .delete(register.delete_a_register);
};
