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

$.get(githubUrl + reposName + gitFiles, function (result) {
  console.log(result);
})

$(function () {
  $('#jstree').jstree();
  $('#jstree').on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });
  $('button').on('click', function () {
    $('#jstree').jstree(true).select_node('child_node_1');
    $('#jstree').jstree('select_node', 'child_node_1');
    $.jstree.reference('#jstree').select_node('child_node_1');
  });
});
