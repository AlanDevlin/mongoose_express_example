// Creating model for each user
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = 'mongodb://localhost:27017/myapplication';

mongoose.connect(url);

var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: String,
	lastName: String,
	age: Number
	});

//Create the model
var User = mongoose.model('User', userSchema);

//Make available to users in our applicaiton
module.exports = User;
