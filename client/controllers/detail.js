angular.module('Instagram')
  .controller('DetailCtrl', function($scope, $location, ngDialog, API) {

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


    var id = $location.path().substring(1);

    API.getMediaById(id).success(function(data) {
      $scope.photo = data;
    });

  });