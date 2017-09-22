        

angular.module('starter.signupCtrl', [])
.controller('signupCtrl',function($scope,signupService,$state,$cordovaCamera,$ionicActionSheet,$ionicModal){

 // $ionicModal.fromTemplateUrl('templates/userdata/userdata.html', {
 //    scope: $scope
 //  }).then(function(modal) {
 //    $scope.modal = modal;
 //  });
console.log("helooooo");
  $scope.close=function(){
    $scope.modal.hide();
    //$state.reload();
     $scope.disableTap ();
    $state.reload(); 
  }
 $ionicModal.fromTemplateUrl('templates/modal/modal.html', function($ionicModal) {
    $scope.modal = $ionicModal;
}, {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
});

$scope.openModal = function(id) {
  console.log(id);
    $scope.selectedId = id;
    $scope.modal.show();
}



$scope.countries = [];
    $scope.states = [];


    function init() {

        // Countries
        $scope.countries.push({
            "code": "BRA",
            "name": "Brasil"
        });
        $scope.countries.push({
            "code": "USA",
            "name": "United States"
        });

        // 2 brazilian states      
        $scope.states.push({
            "code": "SC",
            "name": "Santa Catarina",
            "country": {
                "code": "BRA",
                "name": "Brazil"
            }
        });

        $scope.states.push({
            "code": "RR",
            "name": "Roraima",
            "country": {
                "code": "BRA",
                "name": "Brazil"
            }
        });

        // 2 american states        
        $scope.states.push({
            "code": "AL",
            "name": "Alabama",
            "country": {
                "code": "USA",
                "name": "United States"
            }
        });

        $scope.states.push({
            "code": "FL",
            "name": "Florida",
            "country": {
                "code": "USA",
                "name": "United States"
            }
        });


    }

    init();


  $scope.user={};
     

  $scope.sbmtfun=function(){
     
     // $scope.use=$scope.user;
     // $scope.modal.show();

      signupService.pass($scope.user);
      
      $scope.arr=signupService.array;

      $scope.arr[$scope.arr.length]=$scope.user;
    

$scope.user={};
$state.go('app.userdata')



 };
 

$scope.autoComp=function(){
  var options = {
        componentRestrictions: {country: "in"}
    };
    var inputFrom = document.getElementById('address_employee');
   var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom);
     google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
        var place = autocompleteFrom.getPlace();
        $scope.user.fromLat = place.geometry.location.lat();
        $scope.user.fromLng = place.geometry.location.lng();
        $scope.user.address = place.formatted_address;
      $scope.$apply();
    });
}
  
    
 $scope.disableTap = function () {
        $scope.autoComp();
        var container = document.getElementsByClassName('pac-container');
        angular.element(container).attr('data-tap-disabled', 'true');
        var backdrop = document.getElementsByClassName('backdrop');
        angular.element(backdrop).attr('data-tap-disabled', 'true');
        angular.element(container).on("click", function () {
            document.getElementById('pac-input').blur();
        });
    };

    $scope.showActionsheet = function() {
    //alert(1)
    $ionicActionSheet.show({
      titleText: 'Options',
      buttons: [
        { text: '<i class="icon ion-share"></i> Share' },
        { text: '<i class="icon ion-arrow-move"></i> Camera' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',

      cancel: function() {
        console.log('CANCELLED');
        alert("cancel");
        $state.go("app.signup");
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        if(index === 0) {
               // add edit 1 code
               var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: 0,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    })

            
      }
      if(index === 1) {
               // add edit 2 code
               var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    })

            }
         

},
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        alert("Deleted");

         window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dir) {

        dir.getFile("log1.txt", {create: false}, function (fileEntry) {
            fileEntry.remove(function (file) {
                alert("fichier supprimer");
            }, function () {
                alert("erreur suppression " + error.code);
            }, function () {
                alert("fichier n'existe pas");
            });
        });


    });
      }
    });
        $state.go("app.signup");
  };
    

//     $scope.addImage=function(){
//     var options = {
//       quality: 50,
//       destinationType: Camera.DestinationType.DATA_URL,
//       sourceType: 0,
//       allowEdit: true,
//       encodingType: Camera.EncodingType.JPEG,
//       targetWidth: 100,
//       targetHeight: 100,
//       popoverOptions: CameraPopoverOptions,
//       saveToPhotoAlbum: false,
//       correctOrientation:true
//     };

//     $cordovaCamera.getPicture(options).then(function(imageData) {
//       var image = document.getElementById('myImage');
//       image.src = "data:image/jpeg;base64," + imageData;
//     }, function(err) {
//       // error
//     });
// };

});