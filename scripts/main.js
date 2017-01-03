//Add DOM structure for each post.
function renderPosts(posts) {

  //grab the DOM element with blog posts
  var postsDiv = document.getElementById("main-content");
  //copy shareFooter and append to blog post
  // var elmnt = document.getElementById("share-footer");
  // var cln = elmnt.cloneNode(true);

  posts.forEach(function(post){
    //create outer Div Element
    var postDiv = document.createElement("div");
    //create inner Divs Element
    var postNameDiv = document.createElement("div");
    var postAuthorDiv = document.createElement("div");
    var postContentDiv = document.createElement("div");

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

//create array of post objects for author, content and header
function getPosts(callback){
var posts = [
    {
      "name": "Poem 1",
      "author": "written by William Blake",
      "content": "I was angry with my friend:<br>I told my wrath, my wrath did end.<br>I was angry with my foe:<br>I told it not, my wrath did grow.<br><br>"
    },
    {
      "name": "We’ll Go No More A-Roving",
      "author": "written by Lord Byron",
      "content": "So, we’ll go no more a-roving<br>So late into the night,<br>Though the heart be still as loving,<br>And the moon be still as bright.<br><br>"
    },
    {
      "name": "Das AAooaalters",
      "author": "written by J.W. Goethe",
      "content": "Das Alter ist ein höflich' Mann:<br>So late into the night,<br>Though the heart be still as loving,<br>And the moon be still as bright.<br><br>"
    }
  ];
  callback(posts);
}
// The main call which gets then renders posts.
getPosts(function (posts) {
  renderPosts(posts);
});
