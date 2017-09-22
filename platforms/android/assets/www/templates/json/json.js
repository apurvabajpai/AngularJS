angular.module('starter.json', [])
.controller('json',function($scope, $http,$cordovaEmailComposer,$cordovaGeolocation,$ionicPopup,$state,signupService) {
  

  signupService.api().then(function (response) {
      $scope.myData = response.data.records;
  },function(reason) {
        $scope.error = reason.statusText;
    });

 
  $scope.geo=function(){
    var posOptions = {timeout: 100000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      initialize(lat,long);
      console.log(lat+' '+long)
    }, function(err) {
      // error
    });


  var watchOptions = {
    timeout : 300000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      initialize (lat,long);
      console.log(lat+' '+long);
  });
   watch.clearWatch();
  


  function initialize(lt,ln) {
    $scope.myCenter=new google.maps.LatLng(lt,ln);
    $scope.mapCanvas=document.getElementById("map_div");
    $scope.mapOptions={center:$scope.myCenter,zoom:20};
    $scope.map=new google.maps.Map($scope.mapCanvas,$scope.mapOptions);
    $scope.marker=new google.maps.Marker({position:$scope.myCenter,title:"hello"});
    $scope.marker.setMap($scope.map);
    google.maps.event.addListener($scope.marker,'click',function() {
     $scope.infowindow = new google.maps.InfoWindow({
      });
  $scope.infowindow.open($scope.map,$scope.marker);
  });
}    
 };

 

$scope.Email=function(){
	$cordovaEmailComposer.isAvailable().then(function() {
   // is available
 }, function () {
   // not available
 });

  var email = {
    to: 'max@mustermann.de',
    cc: 'erika@mustermann.de',
    bcc: ['john@doe.com', 'jane@doe.com'],
    attachments: [
      'file://img/logo.png',
      'res://icon.png',
      'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      'file://README.pdf'
    ],
    subject: 'Cordova Icons',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
  };

 $cordovaEmailComposer.open(email).then(null, function () {
   // user cancelled email
 });
}
// $scope.showConfirm = function() {
//    var confirmPopup = $ionicPopup.confirm({
//      title: 'Delete',
//      template: 'Are you sure you want to delete this?'
//    });

//    confirmPopup.then(function(res) {
//      if(res) {
//        $state.go("app.signup");
//      } else {
//        $state.go("app.json");
//      }
//    });
//  };
});