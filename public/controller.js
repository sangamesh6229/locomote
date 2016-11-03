var app= angular.module("myApp",[]);

app.controller("myController",["$scope","$http","$window",function($scope,$http,$window){
var refresh = function(){
		$http.get("/contatcList").success(function(response){
			$scope.contatcList= response;
			$scope.contact= "";
		});

}
refresh();

		$scope.AddContact= function(){
		var password=$scope.contact.password;
		var reenterpassword=$scope.contact.reenterpassword;
		//alert(password+" "+reenterpassword);
		if(password==reenterpassword) {
			
			$http.post("/contatcList", $scope.contact).success(function(response){
				console.log(response);

				refresh();	
			});
		}
		else {
			alert("password miss match !!");

			$scope.contact.password=""
			$scope.contact.reenterpassword="";
			throw err;
		}
}
		$scope.signin=function(){
var username=$scope.username;
var password=$scope.password;


		
		$http.post("/myloginlist").success(function(response){
			

			angular.forEach(response, function(value1, key1) {

        if (value1.username === username && value1.password === password) {
          console.log("success");
          $window.location="/signout.html";
        }
        else{
        	console.log("checkonce");
        }
    });
			$scope.username=""
			$scope.password="";
			refresh();
			
		})
	}
/*plain code*/


$http.get("./citylist").success(function(response)
	{
	//alert("hi")
		$scope.citylist=response;
		
		//$scope.fromcity=ccity.city;
		
	});
$http.get("./buslist").success(function(response)
	{
		$scope.getBuses=function(from1,to){
		
		$scope.buslists=response;

			if($scope.list==""){
				
				$scope.errmsg="No Buses Avaialble";

			}
			else{
				$scope.errmsg="";
				
			}

			/*if((from1=='' || from1==undefined) || (to=='' || to==undefined)){
				
				$window.alert("please fill the feilds")
			}
         //console.log(response);
		else{
			
			$scope.buslists=response;
			
		}*/

		
		//$scope.fromcity=ccity.city
	}
		
	});

$http.get("./airportlist").success(function(response)
	{

		//alert("air");
		
		$scope.airports=response;
		//$scope.fromcity=ccity.city
			
	});

$http.get("./flightlists").success(function(response)
	{
		$scope.getFlightList=function(){
         //console.log(response);
		
		$scope.flightlists=response;
		//$scope.fromcity=ccity.city
		if($scope.list==""){
				
				$scope.errmsg="No Flights Avaialble";

			}
			else{
				$scope.errmsg="";
				
			}
	}
		
	});
$scope.getFromAir=function(city){
		$scope.search.from=city;
	

	}
	$scope.getToAir=function(city){
		
		$scope.search.to=city;

	}
	$scope.getCity=function(city){
		$scope.search.from=city;
	

	}
	$scope.gettoCity=function(city){
		
		$scope.search.to=city;

	}

$scope.redirect=function(){
$window.open("http://www.spicejet.com/",'_blank');

}
$scope.redirectbus=function(){
$window.open("http://www.abhibus.com/",'_blank');

}

}]);