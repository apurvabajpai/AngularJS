angular.module('starter.checkedData', [])
.controller('checkedData', function($scope,signupService) {

	$scope.res=signupService.array2;
	console.log(signupService.array2)
});



