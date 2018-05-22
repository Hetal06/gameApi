'use strict';


const mongoose = require('mongoose'),
  Registrations = mongoose.model('Registrations');

exports.list_all_register = function(req, res) {
  Registrations.find({}, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};




exports.create_user_register = function(req, res) {
  let new_register = new Registrations(req.body);
  new_register.save(function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.read_user_register = function(req, res) {
  Registrations.findById(req.params.registerId, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.update_user_register = function(req, res) {
  Registrations.findOneAndUpdate({_id: req.params.registerId}, req.body, {new: true}, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.delete_user_register = function(req, res) {


  Registrations.remove({
    _id: req.params.registerId
  }, function(err, register) {
    if (err)
      res.send(err);
    res.json({ message: 'Registrations successfully deleted' });
  });
};


let isValidObject = function (Obj) {
	if (JSON.stringify(Obj) === '{}' || Obj === undefined || Obj == null) {
        return false;
    }
    else{
    	return true;
    }
};
// For Login API Function
exports.login = async(req,res) => {
  	let requestedValues = req.body;
  	// console.log("requestedValues = ",requestedValues);
  	let isObject = await isValidObject(requestedValues);
    if (!isObject) {
        console.log(chalk.red("### Redirecting: No appropriate data available for authenticating user!"));
        res.status(403).json({
            "code": 403,
            "status": "Error",
            "message": "No appropriate data available for authenticating user"
        });
        return;
    } else {
        if(requestedValues.userName && requestedValues.pwd){
        	console.log("3 requestedValues = ",requestedValues);
	        User.findOne({ $or: [{"userId": requestedValues.userName},{"userName": requestedValues.userName}]}).then(function (result) {
	            if (result) {
	            	 console.log("result = ",result);
	            	let validPassword = bcrypt.compareSync(requestedValues.pwd, result.password);
	            	 console.log("\n\nvalidPassword = ",validPassword);
	                if(validPassword){
	                    result.password = "";
	                    let payload = {};
	                    payload.userName = result.userName;
	                    payload.userName = result.userName;
	                    payload.userName = result.userName;
	                    // console.log("Plain Obj test ",_.isPlainObject(payload));
	                    let token = jwt.sign(payload, config.token.secret, {
	                        expiresIn: 1440 * 60 * 30 // expires in 1440 minutes/1 day
	                    });
	                    console.log(chalk.green('### Authorised User'));
	                    res.status(200).json({
	                        "code": 200,
	                        "status": "Success",
	                        "authToken": token,
	                        "message": "Authorised User!"
	                    });
	                    token = null;
	                    return;
	                } else {
	                    console.log(chalk.red('### Redirecting:Unauthorised Login'));
	                    res.status(403).json({
	                        "code": 403,
	                        "status": "Error",
	                        "message": "Unauthorised Login! Enter valid Credentials"
	                    });
	                    return;
	                }
	            } else {
	                console.log(chalk.red('### Redirecting: No Record Found with provided UserName'));
	                res.status(404).json({
	                    "code": 404,
	                    "status": "Error",
	                    "message": "Invalid Credentials! Try Again"
	                });
	                return;
	            }

	        });
        }else{
        	res.status(403).json({"code" : 403, "status" : "Error","message" : "Required Fields are missing!"});
        }
    }
};
