
angular.module('starter.userslocationCtrl', [])
.controller('userslocationCtrl',function($scope,signupService){
  $scope.arr=signupService.array;

  var Center=new google.maps.LatLng(28.70, 77.10);
  var mapCanvas= document.getElementById("map");
  var mapOptions={center:Center,zoom:4};
  var map=new google.maps.Map(mapCanvas,mapOptions);
  for(var i=0;i<$scope.arr.length;i++)
  {
    var marker=new google.maps.Marker({position:new google.maps.LatLng($scope.arr[i].fromLat,$scope.arr[i].fromLng),map:map})
    attachSecretMessage(marker,$scope.arr[i].address,$scope.arr[i].frstnm);
  }

  function attachSecretMessage(marker,loc,name){
    var info=new google.maps.InfoWindow({
      content:"NAME : "+name+"<br>"+"LOCATION : "+loc
    });
    marker.addListener('click',function(){
      info.open(marker.get('map'),marker);
    });
  }
       
});

