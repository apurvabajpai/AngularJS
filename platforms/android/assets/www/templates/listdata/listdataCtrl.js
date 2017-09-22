angular.module('starter.listdataCtrl', [])

.controller('listdataCtrl',function($scope,signupService, $cordovaInAppBrowser,$rootScope){
    $scope.arr=signupService.array;
    //$scope.listdetails=$scope.obj;
  //alert(JSON.stringify($scope.obj))
  
  
 $scope.details=function(x){
//alert("vgh")
  signupService.setDetails(x);
// $location.path("/app/listdata/x");
//alert(x);
  };
 })   
.filter('startsWithLetter', function () {
  return function (items, letter) {
    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (letterMatch.test(item.frstnm.substring(0, 1))) {
        filtered.push(item);
        
      }
    }
    return filtered;
  };

$scope.openBrowser=function(){

var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    }
    $cordovaInAppBrowser.open('http://www.google.com', '_blank', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });


    $cordovaInAppBrowser.close();


$rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
    // insert CSS via code / file
    $cordovaInAppBrowser.insertCSS({
      code: 'body {background-color:blue;}'
    });

    // insert Javascript via code / file
    $cordovaInAppBrowser.executeScript({
      file: 'script.js'
    });
  });

  $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){

  });
};
});
