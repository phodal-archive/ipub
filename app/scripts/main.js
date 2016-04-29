var options = {
  editor: document.body, // {DOM Element} [required]
  class: 'pen', // {String} class of the editor,
  debug: false, // {Boolean} false by default
  textarea: '<textarea name="content"></textarea>', // fallback for old browsers
  list: ['bold', 'italic', 'underline'] // editor menu list
}

var editor = new Pen(options);
