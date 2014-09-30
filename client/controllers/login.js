angular.module('Instagram')
  .controller('LoginCtrl', function($scope, $auth) {
    $scope.instagramLogin = function() {
      $auth.authenticate('instagram');
    };
  });