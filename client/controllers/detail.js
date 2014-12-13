angular.module('Instagram')
  .controller('DetailCtrl', function($scope, $rootScope, $location, API) {

    var mediaId = $location.path().split('/').pop();

    API.getMediaById(mediaId).success(function(media) {
      $scope.photo = media;
      $scope.hasLiked = media.user_has_liked;
    });

    $scope.like = function() {
      $scope.hasLiked = true;
      API.likeMedia(mediaId).error(function(data) {
        sweetAlert('Error', data.message, 'error');
      });
    };
  });