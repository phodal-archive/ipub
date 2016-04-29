var options = {
  editor: document.body, // {DOM Element} [required]
  class: 'pen', // {String} class of the editor,
  debug: false, // {Boolean} false by default
  textarea: '<textarea name="content"></textarea>', // fallback for old browsers
  list: ['bold', 'italic', 'underline'] // editor menu list
}

var editor = new Pen(options);

var reposName = 'phodal/growth-ebook/';
var githubUrl = 'https://api.github.com/repos/';
var gitFiles = 'git/trees/master';
var url =

$.get(githubUrl + reposName + gitFiles, function(result){
  console.log(result);
})
