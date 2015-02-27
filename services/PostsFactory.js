brodineNews.factory('PostsFactory', function PostsFactory() {
  var factory = {};
  factory.posts = [];


  factory.addPost = function() {
    factory.posts.push({ name: factory.postName, votes: 0, id: factory.posts.length + 1, date: new Date(), comments: [] });
    factory.postName = null;
  };


  factory.upVotes = function(item) {
    item.votes += 1;
  };


  factory.addDate = function(item) {
    item.date = new Date();
  }



  return factory;
});
