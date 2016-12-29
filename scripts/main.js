//Add DOM structure for each post.
function renderPosts(posts) {

  //grab the DOM element with blog posts
  var postsDiv = document.getElementById("mainContent");

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
    postDiv.setAttribute("class", "blogContent");
    postNameDiv.setAttribute("class", "heading");
    postAuthorDiv.setAttribute("class", "postInfo");
    postContentDiv.setAttribute("class", "blogTxt");

    postDiv.appendChild(postNameDiv);
    postDiv.appendChild(postAuthorDiv);
    postDiv.appendChild(postContentDiv);

    postsDiv.appendChild(postDiv);
  })
}

//create array of post objects for author, content and header
function getPosts(){
  return [
    {
      "name": "We’ll Go No More A-Roving",
      "author": "Lord Byron",
      "content": "So, we’ll go no more a-roving<br>So late into the night,<br>Though the heart be still as loving,<br>And the moon be still as bright."
    },
    {
      "name": "Das Alters",
      "author": "J.W. Goethe",
      "content": "Das Alter ist ein höflich' Mann:<br>So late into the night,<br>Though the heart be still as loving,<br>And the moon be still as bright."
    }
  ];
}

renderPosts(getPosts());
