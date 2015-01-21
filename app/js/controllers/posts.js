// this is the creation of the module. Next inject into app
var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', function($scope, $http){
  $scope.name = "posts controller yay";
}]);

postsControllerModule.controller('newPostController', ['$scope', '$http', function($scope, $http){
  $scope.newName = "new controller WOOHOO";
}]);

// This controller shows individual post
postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location){
  $scope.postName = "this is the post view";
  $scope.id = $stateParams.id;
  $scope.test = "This is a test";
  $scope.deletePost = function(id){
    $http.delete('http://localhost:3000/posts/'+id)
    .success(function(){
      $location.path("/");
    });
  };
}]);
