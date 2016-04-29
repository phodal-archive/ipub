<jstree>
  <p>
  <ul class="path-tree">
    <li each={ file, i in files }>{ file.path }</li>
  </ul>
  </p>

  <script>
    this.files = opts.files || 0

    this.on('unmount', function () {

    })
  </script>

</jstree>
