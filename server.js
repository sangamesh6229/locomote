var express = require("express");
var app= express();// inbulid function
var PORT = process.env.PORT || 3700

var mongoose= require("mongoose");
var contact= require("./model/contact")
var bodyParser = require("body-parser")

var City=require("./model/cities");
var Bus=require("./model/buses");

var Airport=require("./model/airports");

var Flight=require("./model/flightslist");


mongoose.connect("mongodb://localhost/booking", function(){
	console.log("sucessfuly connectd with mongoo db")
});
app.use(express.static(__dirname+"/public"))
app.use(bodyParser.json());


app.get("/contatcList",function(req,res){

		contact.getContacts(function(err,data){
			if(err){
				throw err;
			}
			res.json(data);
		})//res

});

app.post("/contatcList", function(req,res){
	var body= req.body;// will fectch body details
	
	contact.AddContact(body,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})


});


/*passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});
*/

app.post("/myloginlist",function(req,res){
  
  contact.verfication(function(err,data){
    
    if (err) {
      throw err;
    }
    
    res.json(data);

  })
})

app.get("/citylist",function(req,res){
  City.getCities(function(err,data)
  {
    console.log(data);
    if(err)
    {
      throw err;
    }
    res.json(data);
  })

});
app.get("/buslist",function(req,res){
  Bus.getBusList(function(err,data)
  {
    console.log(data);
    if(err)
    {
      throw err;
    }
    res.json(data);
  })
})

app.get("/airportlist",function(req,res){
  Airport.getAirports(function(err,data)
  {

  console.log("in server air");

       console.log(data);
    if(err)
    {
      throw err;
    }
    res.json(data);
  })
})

app.get("/flightlists",function(req,res){
  Flight.getFlightList(function(err,data)
  {
    console.log(data);
    if(err)
    {
      throw err;
    }
    res.json(data);
  })
})


app.listen(PORT, function(){

	console.log("server is listing at port 3000"+PORT)
})