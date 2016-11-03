var mongoose=require("mongoose");

var flightSchema=mongoose.Schema({

	flightName:{
		type:String
	},
	seats:{
		type:String
	},
	departure:{
		type:String
	},
	arrival:{
		type:String
	},
	price:{
		type:String
	}
	
});

var Fly=module.exports=mongoose.model("flights",flightSchema);
module.exports.getFlightList=function(callback){
	Fly.find(callback);
}
