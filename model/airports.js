var mongoose=require("mongoose");
var airportSchema=mongoose.Schema({

	airport:{
		type:String
		
	}
	
});

var Air=module.exports=mongoose.model("airports",airportSchema);
module.exports.getAirports=function(callback){
	Air.find(callback);
}

