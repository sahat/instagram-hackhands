angular.module('Instagram')
    .factory('API', function($http) {

      return {
        getFeed: function() {
          return $http.get('http://instagram-server.herokuapp.com/api/feed');
        },
        getMediaById: function(id) {
          return $http.get('http://instagram-server.herokuapp.com/api/media/' + id);
        },
        likeMedia: function(id) {
          return $http.post('http://instagram-server.herokuapp.com/api/like', { mediaId: id });
        }
      }

    });