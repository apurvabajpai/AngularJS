// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers','starter.services','starter.signupCtrl','starter.userslocationCtrl',

  'starter.userdataCtrl',
  'starter.listdataCtrl',
  'starter.listdetailsCtrl',
  'starter.json',
  'ngCordova',
  'starter.infiniteScroll',
  'starter.checkedData',
  'starter.modalCtrl'])




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    cache: false,
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
 

 .state('app.signup', {
  cache: false,
    url: '/templates/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup/signup.html',
        controller: 'signupCtrl'
         
      }
    }
  })

  
 .state('app.userdata', {
  cache: false,
    url: '/templates/userdata',
    views: {
      'menuContent': {
        templateUrl: 'templates/userdata/userdata.html',
        controller:'userdataCtrl'
        
         
      }
    }
  })


.state('app.modal', {
  cache: false,
    url: '/templates/modal',
    views: {
      'menuContent': {
        templateUrl: 'templates/modal/modal.html',
        controller:'modalCtrl'
        
         
      }
    }
  })

.state('app.userslocation', {
  cache: false,
    url: '/templates/userslocation',
    views: {
      'menuContent': {
        templateUrl: 'templates/userlocation/userslocation.html',
        controller:'userslocationCtrl'
        
         
      }
    }
  })



 .state('app.listdata', {
  cache: false,
    url: '/templates/listdata',
    views: {
      'menuContent': {
        templateUrl: 'templates/listdata/listdata.html',
        controller:'listdataCtrl'
        
         
      }
    }
  })

.state('app.listdetails', {
  cache: false,
    url: '/templates/listdata/:listdetailsId',
    views: {
      'menuContent': {
        templateUrl: 'templates/listdetails/listdetails.html',
        controller:'listdetailsCtrl'
        
         
      }
    }
  })

.state('app.json', {
  cache: false,
    url: '/templates/json',
    views: {
      'menuContent': {
        templateUrl: 'templates/json/json.html',
        controller:'json'    
         
      }
    }
  })


 .state('app.infiniteScroll', {
  cache: true,
    url: '/templates/infiniteScroll',
    views: {
      'menuContent': {
        templateUrl: 'templates/infiniteScroll/infiniteScroll.html',
        controller:'infiniteScroll'
        
         
      }
    }
  })

  .state('app.checkedData', {
  cache: false,
    url: '/templates/checkedData',
    views: {
      'menuContent': {
        templateUrl: 'templates/checkedData/checkedData.html',
        controller:'checkedData'
        
         
      }
    }
  })

  .state('app.browse', {
    cache: false,
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/templates/signup');
});
