var data = require("../data.json");

exports.addFriend = function(request, response) {  
	 response.render('index', data.newFriend)
	 //data.friends.push(newFriend)
	 // this is where I got stuck with the lab
 };