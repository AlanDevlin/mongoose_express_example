//Load in User module
var User = require('./app/models/user');

/****************************************************************************
 *
 *
 * 	CREATE USER
 *
 *
 ****************************************************************************/


var user = new User({
	firstName: "Joe",
	lastName: "Doe",
	age: 25
});

user.save((err) => {
	if(err) throw err;

	console.log("User saved successfully!");
});

/******************************************************************************
 *
 *
 * 	READ USERS
 *
 *
 ******************************************************************************/
//Will return list of all users
User.find({}, (err, users) => {
	if(err) throw err;
	console.log("Here is a list of users:\n" + users);
});

//Add's query conditions
User.find({firstName: "Joe"}, (err, results) => {
	if(err) throw err;
	console.log("Here is a list of users with 'First Name' = 'Joe':\n" + results);
});

//Limit the returned fields
User.find({firstName: "John"}, 'age',{limit: 5}, (err, results) => {
	if(err) throw err;
	console.log("Here is a list of limited fields:\n" + results);
})

//Just return one record
User.findOne((err, user) =>{
	if(err) throw err;
	console.log("Most recent added user is:\n" + user);
});

/*************************************************************************************
 *
 *
 * 	UPDATE USERS
 *
 *
 *************************************************************************************/
//Update most recent user
User.findOne((err, user) => {
	if(err) throw err;

	user.firstName = 'Daivari';
	user.age = 39;

	user.save((err) => {
		if(err) throw err;
		console.log("User successfully updated!");
	});
});

//Find and update all in one
User.findOneAndUpdate({ firstName: 'John'}, {firstName: 'Tony'}, (err, user) => {
	if(err) throw err;
	console.log("Successfully update: \n" + user);
});

/*******************************************************************************************
 *
 *
 * 	DELETE USERS
 *
 *
 *******************************************************************************************/
//Find a user and then remove
User.findOneAndRemove({firstName: 'Joe'}, (err) => {
	if(err) throw err;
	console.log("User deleted");
});
