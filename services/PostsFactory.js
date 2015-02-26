brodineNews.factory('PostsFactory', function PostsFactory() {
  var factory = {};
  factory.posts = [];


  factory.addPost = function() {
    factory.posts.push({ name: factory.postName, votes: 0, id: factory.posts.length + 1, comments: [] });
    factory.postName = null;
  };

  // factory.updateVotes = function(votes) {
  //   return votes++;
  // };

  factory.upVotes = function(item) {
    item.votes += 1;
  };

  return factory;
});
