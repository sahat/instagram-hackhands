angular.module('Instagram')
  .controller('DetailCtrl', function($scope, $location, ngDialog, API) {

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

    API.getMediaById(mediaId).success(function(data) {
      $scope.photo = data;
    });

    $scope.like = function() {
      API.likeMedia(mediaId).success(function(data) {
        alert('liked');
      });
    };

  });