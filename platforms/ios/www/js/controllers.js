angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
    alert("login successfull");

  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();

  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});





























/*

.controller('signupCtrl',function($scope,signupService){
 $scope.country={"Australia":["New South Wales","Queensland","Victoria"],
          "India":["MadhyaPradesh","Maharashtra","UttarPradesh"],
          "Austria":["Burgenland","Carinthia","Salzburg"]
          };
          
  $scope.stateOption=function(){
    $scope.state=$scope.selectedCountry;
  }


     
  $scope.sbmtfun=function(){
   
      
      /*$scope.x=document.getElementById("cntry").selectedIndex;
      $scope.y=document.getElementById("cntry").options;
      $scope.selectedcntry=$scope.y[$scope.x].text;
 
        $scope.a=document.getElementById("stt").selectedIndex;
        $scope.b=document.getElementById("stt").options;
        $scope.selectedstt=$scope.b[$scope.a].text;

      $scope.arr=[$scope.frstnm,$scope.lstnm,$scope.email,$scope.cntct];
  
      signupService.funct($scope.arr);

      
      $scope.object=signupService.obj;
    
      $scope.object[$scope.frstnm]=$scope.arr;
   
      signupService.set($scope.object);
     

  };
})

.controller('userdataCtrl',function($scope,signupService){
  $scope.array=[];
  $scope.array=signupService.arrayService;

  $scope.frstnm=$scope.array[0];
  $scope.lstnm=$scope.array[1];
  $scope.email=$scope.array[2];
  $scope.cntct=$scope.array[3];
  //$scope.selectedcntry=$scope.array[4];
  //$scope.selectedstt=$scope.array[5];

})

.controller('listdataCtrl',function($scope,signupService){
  $scope.obj=signupService.objService;
})
.controller('listdetailsCtrl',function($scope,signupService){
  

});
*/


