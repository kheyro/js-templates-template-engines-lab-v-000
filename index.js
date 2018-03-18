function createPost() {
  let postTitle = document.getElementById("postTitle").value
  let postBody = document.getElementById("postBody").value
  let postAuthor = document.getElementById("postAuthor").value

  let commentsTemplate = document.getElementById("comments-template").innerHTML
  let postTemplate = document.getElementById("post-template").innerHTML
  let pageTemplate = document.getElementById("page-template").innerHTML

  let templateFn = _.template(postTemplate);

  let templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});

  let pageFn = _.template(pageTemplate)
  let post = document.getElementById('post')

  let commentFn = _.template(commentsTemplate)

  document.getElementsByTagName('main')[0].innerHTML += pageFn()
  post.innerHTML = templateHTML
  post.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {

}
