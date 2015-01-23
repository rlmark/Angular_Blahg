//This file gets first during http request.

var blogApp = angular.module('blogApp', [
'ui.router',
'homeControllerModule',
'postsControllerModule',
'servicesModule'
]);

// This is routing block
blogApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
  })// no semi colon here, because these are chained together. all of these methods are attached to state provider object.
  .state('posts', {
    url: '/posts',
    templateUrl: 'app/views/posts.html',
  })
  .state('new', {
    url: '/new-post',
    // views: {
    //   'new': {
        templateUrl: 'app/views/new.html'
    //   }
    // }
  })
  .state('show', {
    url: '/post/:id',
    templateUrl: 'app/views/show.html'
  })
  // Default in case user puts in weird input
  $urlRouterProvider.otherwise('/');
});
