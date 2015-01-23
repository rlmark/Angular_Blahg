var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http){

  // Avoiding "cannot call length on undefined"error
  // $scope.posts = [];
  // $scope.tags = [];

  // move this code to posts controller
  // gets all posts from rails api
  // $http.get('http://localhost:3000/posts')
  //   .success(function(data){
  //     $scope.posts = data;
  //   });
  //
  // // move tags to posts controller
  // // gets tags from rails api
  // $http.get('http://localhost:3000/tags')
  // .success(function(data){
  //   $scope.tags = data;
  // });
  //
  // // associating tags with posts
  // $scope.getTagName = function(id) {
  //   ret = "";
  //   // loops through all of the tags in $scope.tags
  //   for (i = 0; i < $scope.tags.length; i++){
  //     // checks to see if the param we passed is equal to the tag id
  //     if(id == $scope.tags[i].id) {
  //       ret = $scope.tags[i].name;
  //     }
  //   }
  //   return ret;
  // }
  //
  // // click event for adding tags to posts upon creation
  // $scope.toggleId = function(id) {
  //   // this will return the index of item if exist in array, or -1 if not existing
  //   var i = $scope.newPost.tag_ids.indexOf(id);
  //   // if id is not in array
  //   if (i === -1) {
  //     $scope.newPost.tag_ids.push(id);
  //   } else {
  //     // if the id is in array
  //     $scope.newPost.tag_ids.splice(i,1);
  //     // splice removes the element at index i, for length 1.
  //   }
  //   console.log($scope.newPost.tag_ids)
  // }

  // $scope.newPost = {"title": "", "content": "", "tag_ids": []}
  //
  // $scope.submitNewPost = function(){
  //   $http.post('http://localhost:3000/posts',
  //     {
  //       post: {
  //         title: $scope.newPost.title,
  //         content: $scope.newPost.content,
  //         tag_ids: $scope.newPost.tag_ids
  //       }
  //     }
  //   )
  // }

}]);
