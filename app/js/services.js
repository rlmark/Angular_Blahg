var servicesModule = angular.module('servicesModule', []);

servicesModule.factory('apiService', ['$http', function($http){
  var url='http://localhost:3000';
  return{
    get: function(page) {
      return $http.get(url + page);
    },
    postPost: function(post) {
      return
      $http.post('http://localhost: 3000/posts',
    {
      post: {
        title: post.title,
        content: post.content,
        tag_ids: post.tag_ids
      }
    }
  );}
}

}]);
