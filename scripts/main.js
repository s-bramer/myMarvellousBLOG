//wrap js functions in self-invoking function
//avoid polluting the global namespace
(function () {

  //Add DOM structure for each post.
  function renderPosts(posts) {

    //grab the DOM element with blog posts
    var postsDiv = document.getElementById("main-content");
    //copy shareFooter and append to blog post
    // var elmnt = document.getElementById("share-footer");
    // var cln = elmnt.cloneNode(true);

    posts.forEach(function(post){
      //create outer Div Element
      var postDiv = document.createElement("div"),
      //create inner Divs Element
          postNameDiv = document.createElement("div"),
          postAuthorDiv = document.createElement("div"),
          postContentDiv = document.createElement("div");

      //Set the content of each element
      postNameDiv.innerHTML = post.name;
      postAuthorDiv.innerHTML = post.author;
      postContentDiv.innerHTML = post.content;

      //Set CSS classes on each div for styling
      postDiv.setAttribute("class", "blog-content");
      postNameDiv.setAttribute("class", "blog-header");
      postAuthorDiv.setAttribute("class", "post-info");
      postContentDiv.setAttribute("class", "blog-txt");

      postDiv.appendChild(postNameDiv);
      postDiv.appendChild(postAuthorDiv);
      postDiv.appendChild(postContentDiv);

      //append the share footer
      //postDiv.appendChild(cln);

      postsDiv.appendChild(postDiv);

    })
  }

  // Fetches the file "main.json" and passes the parsed JSON object
  // into the given callback function.
  function getPosts(callback){

    // Fetch the JSON file using XMLHttpRequest.
    // taken from Curran's screencasts (https://github.com/curran)
    var request = new XMLHttpRequest();

    // When the file has loaded,
    request.onload = function () {

      // parse the JSON text into an array of post objects.
      var posts = JSON.parse(request.responseText);

      // Pass the posts array to the callback.
      callback(posts);
    };
    request.open("GET", "main.json", true);
    request.send(null);
  }
  
  // The main call which gets then renders posts.
  getPosts(function (posts) {
    renderPosts(posts);
  });
}());
