angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');

    $authProvider.loginUrl = 'http://instagram-server.herokuapp.com/auth/login';
    $authProvider.signupUrl = 'http://instagram-server.herokuapp.com/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'http://instagram-server.herokuapp.com/auth/instagram',
      redirectUri: 'https://dl.dropboxusercontent.com/u/14131013/instagram/index.html',
      clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1',
      requiredUrlParams: ['scope'],
      scope: ['likes'],
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
  })
  .run(function($rootScope, $window, $auth) {
    if ($auth.isAuthenticated()) {
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  });
