angular.module('starter.infiniteScroll', [])
.controller('infiniteScroll', function($scope, $http,signupService,$state) {

     $scope._list = [];
     var from = 0;
     $scope.populateList = function() {
         populateLists();
     }
     $scope.canWeLoadMoreContent = function() {
         return ($scope._list.length > 49) ? false : true;
     }
     populateLists();

     function populateLists() {
         signupService.api2().then(function(response) {
             $scope.list = response.data;
             var limit = from + 9;
             for (var i = from; i <= limit; i++) {
                // console.log($scope.list[i]);
                 $scope._list.push({
                     img: $scope.list[i].img,
                     id: $scope.list[i].id,
                     firstName: $scope.list[i].firstName,
                     lastName: $scope.list[i].lastName

                 });
                 from = i+1;

             }
             $scope.$broadcast('scroll.infiniteScrollComplete');
         });
     }
     $scope.selectedData = function(data){
        var index=-1;
        signupService.pass2(data);
        $scope.array2=signupService.array2;
        console.log(signupService.array2);
        for(var i=0;i<$scope.array2.length;i++){
            if($scope.array2[i].img==data.img&&$scope.array2[i].id==data.id&&$scope.array2[i].firstName==data.firstName&&$scope.array2[i].lastName==data.lastName)
     {
        index=i;
     }   
     }
     if(index==-1)
     {
        
        $scope.array2[$scope.array2.length]=data;
        signupService.pass2(data);

     }
     else
     {
        $scope.array2.splice(index,1);
     }
     }
     $scope.go=function(){
        $state.go('app.checkedData');
     }
     
 });