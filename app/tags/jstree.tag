<jstree>
  <p>
  <ul class="path-tree">
    <li each={ file, i in files } class={ file.type }>{ file.path } <span if={ file.type === 'tree' }> / </span></li>
  </ul>
  </p>

  <script>
    this.files = opts.files || 0

    this.on('unmount', function () {

    })
  </script>

</jstree>
