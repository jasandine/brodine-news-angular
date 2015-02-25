brodineNews.factory('PostsFactory', function PostsFactory() {
  var factory = {};
  factory.posts = [];

  factory.addPost = function() {
    factory.posts.push({ name: factory.postName, id: factory.posts.length + 1, comments: [] });
    factory.postName = null;
  };

  return factory;
});
