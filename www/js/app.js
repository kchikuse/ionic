angular.module('templates', []); 

angular.module('mhuri', [
  'ionic',
  'templates',
  'mhuri.services',
  'mhuri.controllers'  
])

.run(function($ionicPlatform, $ionicConfig) {

  $ionicPlatform.ready(function() {
    
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    $ionicConfig.views.transition('android');
    $ionicConfig.views.swipeBackEnabled(false);   
     
  });

})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    controller: 'AppCtrl',
    templateUrl: 'views/side-menu.html'
  })

  .state('app.intro', {
    url: '/intro',
    views: {
      'menuContent': {
        templateUrl: 'views/intro.html'
      }
    }
  })

  .state('app.children', {
    url: '/children/:parent',
    views: {
      'menuContent': {
        controller: 'ChildCtrl',
        templateUrl: 'views/children.html'
      }
    }
  })

  .state('app.praise', {
    url: '/praise',
    views: {
      'menuContent': {
        templateUrl: 'views/praise.html'
      }
    }
  })

  .state('app.history', {
    url: '/history',
    views: {
      'menuContent': {
        templateUrl: 'views/history.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        controller: 'SearchCtrl',
        templateUrl: 'views/search.html'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'views/about.html'
      }
    }
  });

  $urlRouterProvider.otherwise('app/intro');

  $ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.backButton.previousTitleText(false).text('');

});