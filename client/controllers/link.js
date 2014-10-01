angular.module('Instagram')
  .controller('LinkCtrl', function($scope, $auth) {

    $scope.linkInstagram = function() {
      $auth.link('instagram')
        .then(function(response) {
          console.log('done! linking');
        });
    };

  });