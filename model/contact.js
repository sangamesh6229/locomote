var mongoose=require("mongoose");
var bcrypt = require('bcryptjs');

var contactSchema = mongoose.Schema({
email :{
	type: String,
	required: true
	},
	username:{
		type:String,
		required: true
	},
	password:{
		type:String,
		required: true
	}
});

var Contact = module.exports = mongoose.model("contact",contactSchema);

module.exports.getContacts = function(callback){
	Contact.find(callback)
}

module.exports.AddContact = function(contact, callback){
	Contact.create(contact,callback);
}
module.exports.verfication=function(callback){
	//var query = { name:body.name ,email:body.email};
	Contact.find(callback);

}