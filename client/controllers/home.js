angular.module('Instagram')
  .controller('HomeCtrl', function($scope, $auth, API) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    API.getFeed().success(function(data) {

    });
  });