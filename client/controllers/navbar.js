angular.module('Instagram')
  .controller('NavbarCtrl', function($scope, $rootScope, $window, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.logout = function() {
      $auth.logout();
    };

    $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
  });