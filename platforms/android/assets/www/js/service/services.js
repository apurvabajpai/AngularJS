angular.module('starter.services', [])
.service("signupService",function($http,$q){
  
 this.array=[];
  this.pass=function(user){
    
     this.userService=user;
     
  };
 
  this.setDetails=function(x){
    this.detailsService=x;
   
  };
  
this.array2=[];
  this.pass2=function(data){
    
     this.userService2=data;
     
  };
  this.api2=function()
  {
  	var defer = $q.defer();
  	$http({method:'GET',
  		   url:'templates/infiniteScroll/infiniteScroll.json'
  		})
  	.then(function(response)
  	{
  		defer.resolve(response);
  	},
  	function(reason)
  	{
  		defer.reject(reason);
  	})
return defer.promise;

  };

  this.api=function(){
  	var defer = $q.defer();
  	$http({method:'GET',
  				url:"templates/json/jsondata.json"
  			})
  	.then(function(response){
  		defer.resolve(response);

  	},
  	function(reason){
  		defer.reject(reason);

  	})
return defer.promise;
  };


});