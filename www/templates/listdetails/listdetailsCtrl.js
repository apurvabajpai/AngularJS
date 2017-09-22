angular.module('starter.listdetailsCtrl', [])
.controller('listdetailsCtrl',function($scope,signupService){
  $scope.details=signupService.detailsService;
 // $scope.dtl=signupService.dtlService;
 var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
   };

   

});
