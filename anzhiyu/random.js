var posts=["2024/07/07/hello-world/","2024/09/03/Docker初学/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };