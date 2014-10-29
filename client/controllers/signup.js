angular.module('Instagram')
  .controller('SignupCtrl', function($scope, $auth) {

    $scope.signup = function() {
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $auth.signup(user)
        .catch(function(response) {
          console.log(response.data);
        });
    };

  });