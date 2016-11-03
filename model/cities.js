var mongoose=require("mongoose");
var citySchema=mongoose.Schema({

	city:{
		type:String
		
	}
	
});

var City=module.exports=mongoose.model("cities",citySchema);
module.exports.getCities=function(callback){
	City.find(callback);
}

