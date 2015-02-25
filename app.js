var brodineNews = angular.module('brodineNews', ['ui.router']);

brodineNews.config(function($stateProvider){
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('posts', {
    url: "/posts",
    templateUrl: "partials/posts.html",
    controller: 'PostsCtrl'
  });
});
