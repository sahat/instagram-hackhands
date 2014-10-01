angular.module('Instagram')
  .controller('SignupCtrl', function($scope, $auth) {
    $scope.signup = function() {
      $auth.signup({
        email: $scope.email,
        password: $scope.password
      }).catch(function(response) {
        console.log(response.data);
      });
    };
  });