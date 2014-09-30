angular.module('Instagram')
  .controller('LoginCtrl', function($scope, $rootScope, $auth) {
    $scope.instagramLogin = function() {
      $auth.authenticate('instagram')
        .then(function(response) {
          $rootScope.currentUser = response.data.user
        });
    };
  });