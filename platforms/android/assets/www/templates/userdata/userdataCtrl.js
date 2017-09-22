
angular.module('starter.userdataCtrl', [])
.controller('userdataCtrl',function($scope,signupService,$window,$ionicPopup,$state){
  $scope.use=signupService.userService;

   $scope.initialize = function(lt,ln) {
    $scope.myCenter=new google.maps.LatLng(lt,ln);
    $scope.mapCanvas=document.getElementById("map_div");
    $scope.mapOptions={center:$scope.myCenter,zoom:20};
    $scope.map=new google.maps.Map($scope.mapCanvas,$scope.mapOptions);
    $scope.marker=new google.maps.Marker({position:$scope.myCenter,title:"hello"});
    $scope.marker.setMap($scope.map);
    google.maps.event.addListener($scope.marker,'click',function() {
    $scope.infowindow = new google.maps.InfoWindow({
      content:"ADDRESS : "+$scope.use.address+"<br>"+"NAME : "+$scope.use.frstnm+" "+$scope.use.lstnm+"<br>"+"CONTACT NUMBER : "+$scope.use.cntct
    });
  $scope.infowindow.open($scope.map,$scope.marker);
  });
}   
$scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Delete',
     template: 'Are you sure you want to delete this?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       $state.go("app.signup");
     } else {
       $state.go("app.userdata");
     }
   });
 };
});

