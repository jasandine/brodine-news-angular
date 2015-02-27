brodineNews.controller('PostsCtrl', function PostsCtrl($scope, $stateParams, PostsFactory, UtilitiesFactory) {
  $scope.posts = PostsFactory.posts;
  $scope.PostsFactory = PostsFactory;

});
