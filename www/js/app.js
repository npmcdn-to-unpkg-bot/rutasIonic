// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
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
    templateUrl: 'templates/commons/menu.html',
    controller: 'AppController'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/home.html'
      }
    }
  })

  .state('app.rutas', {
    url: '/rutas',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/rutas/programa.html',
        controller: 'ProgramasController'
      }
    }
  })

  .state('app.perfiles', {
    url: '/rutas/perfiles/:programa_id',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/rutas/perfiles.html',
        controller: 'PerfilesController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
