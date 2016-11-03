var mongoose=require("mongoose");

var busSchema=mongoose.Schema({

	travelName:{
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

var Bus=module.exports=mongoose.model("buses",busSchema);
module.exports.getBusList=function(callback){
	Bus.find(callback);
}
