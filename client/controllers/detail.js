angular.module('Instagram')
  .controller('DetailCtrl', function($scope, $rootScope, $location, ngDialog, API) {

    var mediaId = $location.path().split('/').pop();

    $scope.showCommentDialog = function() {
      ngDialog.open({
        template: '<form ng-submit="postComment()">' +
        '<div class="form-group">' +
        '<label class="control-label" for="comment">Leave a Comment</label>' +
        '<input type="text" class="form-control" name="comment">' +
        '</div>' +
        '<button type="submit" class="btn btn-primary">Comment</button>' +
        '</form>',
        plain: true
      });
    };

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

  });