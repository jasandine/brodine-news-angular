brodineNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, PostsFactory, UtilitiesFactory) {
  $scope.post = UtilitiesFactory.findById(PostsFactory.posts, $stateParams.postId)
  $scope.addComment = function() {
     $scope.post.comments.push({ name: $scope.commentName });
     $scope.commentName = null;
   }

});
