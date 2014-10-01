angular.module('Instagram')
  .controller('LoginCtrl', function($scope, $location, $rootScope, $auth) {
    $scope.instagramLogin = function() {
      $auth.authenticate('instagram')
        .then(function(response) {
          $rootScope.currentUser = response.data.user
        })
        .catch(function(response) {
          console.log(response.data);
        });
    };

    $scope.emailLogin = function() {
      $auth.login({ email: $scope.email, password: $scope.password })
        .then(function(response) {
          var user = response.data.user;

          if (!user.username) {
            return $location.path('/connect');
          }

          $rootScope.currentUser = user;
        })
        .catch(function(response) {
          $scope.errorMessage = {};
          angular.forEach(response.data.message, function(message, field) {
            $scope.loginForm[field].$setValidity('server', false);
            $scope.errorMessage[field] = response.data.message[field];
          });
        });
    };

  });