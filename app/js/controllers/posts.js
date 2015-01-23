// this is the creation of the module. Next inject into app
var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', 'apiService', function($scope, $http, apiService){
  $scope.name = "posts controller yay";
  $scope.posts = []
  $scope.tags = [];

  // apiService.postPost($scope.newPost);

  apiService.get('/posts')
    .success(function(data) {
      $scope.posts = data
    });

  apiService.get('/tags')
    .success(function(data){
      $scope.tags = data
    });

  // associating tags with posts
  $scope.getTagName = function(id) {
    ret = "";
    // loops through all of the tags in $scope.tags
    for (i = 0; i < $scope.tags.length; i++){
      // checks to see if the param we passed is equal to the tag id
      if(id == $scope.tags[i].id) {
        ret = $scope.tags[i].name;
      }
    }
    return ret;
  }

}]);

postsControllerModule.controller('newPostController', ['$scope', '$http', 'apiService', function($scope, $http, apiService){

  $scope.newPost = {"title": "", "content": "", "tag_ids": []}

  apiService.get('/tags')
  .success(function(data){
    $scope.tags = data
  });

  $scope.submitNewPost = function(){
    $http.post('http://localhost:3000/posts',
    {
      post: {
        title: $scope.newPost.title,
        content: $scope.newPost.content,
        tag_ids: $scope.newPost.tag_ids
      }
    })
  }

}]);

// This controller shows individual post
postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', '$location', 'apiService', function($scope, $http, $stateParams, $location, apiService){
  $scope.id = $stateParams.id;
  $scope.test = "This is a test";

  apiService.get('/posts/' + $scope.id)
    .success(function(data){
      $scope.post = data
    })

  apiService.get('/tags')
    .success(function(data){
      $scope.allTags = data
    });

  $scope.getTagName = function(id) {
    ret = "";
    console.log("I'm here")
    // loops through all of the tags in $scope.tags
    for (i = 0; i < $scope.allTags.length; i++){
      // checks to see if the param we passed is equal to the tag id
      if(id == $scope.allTags[i].id) {
        ret = $scope.allTags[i].name;
      }
    }
    return ret;
  }

  $scope.deletePost = function(id){
    $http.delete('http://localhost:3000/posts/'+ id)
    .success(function(){
      $location.path("/");
    });
  };

  $scope.post = "Post goes here"
}]);
