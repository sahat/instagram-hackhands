angular.module('Instagram')
  .controller('DetailCtrl', function($scope, $rootScope, $location, API) {

    var mediaId = $location.path().split('/').pop();

    // TODO: Move into router resolve
    API.getMediaById(mediaId).success(function(media) {
      console.log(media)
      $scope.photo = media;
    });

    $scope.like = function() {
      API.likeMedia(mediaId)
        .success(function() {
          $scope.hasLiked = true;
        })
        .error(function(data) {
          sweetAlert('Error', data.message, 'error');
        });
    };

    $scope.comment = function() {
      var text = prompt('Leave a Comment')
      API.comment(mediaId, text)
        .success(function() {

        })
        .error(function() {
          sweetAlert('Error', data.message, 'error');
        });
    };

  });