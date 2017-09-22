angular.module('starter.modalCtrl', [])
.controller('modalCtrl',function($scope,signupService,$state,$ionicModal)
{

	$ionicModal.fromTemplateUrl('templates/modal/modal.html', function($ionicModal) 
    {
    $scope.modal = $ionicModal;
    },
   {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
   }
   );

$scope.openModal = function(id) 
{
  console.log(id);
  
    $scope.selectedId = id;
    $scope.modal.show();
}
$scope.close=function()
{
    $scope.modal.hide();
   // $state.reload();
}
});