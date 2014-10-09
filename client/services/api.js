angular.module('Instagram')
  .factory('API', function($rootScope, $window, $http, $auth) {

    return {
      getFeed: function() {
        return $http.get('http://localhost:3000/api/feed');
      }
    }

  });