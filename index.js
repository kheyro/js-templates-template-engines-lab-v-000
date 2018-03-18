function createPost() {
  let postTitle = document.getElementById("postTitle").value
  let postBody = document.getElementById("postBody").value
  let postAuthor = document.getElementById("postAuthor").value

  let postTemplate = document.getElementById("post-template").innerHTML
  let pageTemplate = document.getElementById("page-template").innerHTML

  let templateFn = _.template(postTemplate);

  let templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});

  let pageFn = _.template(pageTemplate)
  let pageHTML = pageFn({'post': templateHTML})

  document.getElementsByTagName('main').innerHTML += pageHTML;
}
