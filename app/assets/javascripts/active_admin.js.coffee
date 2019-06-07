#= require active_admin/base
//= require active_admin/base
//= require tinymce


# $(document).ready(function() {
#   tinyMCE.init({
#      mode: 'textareas',
#      theme: 'advanced'
#    });
# });
$(document).ready ->
  tinyMCE.init
    # mode: 'textareas'
    selector: "textarea.tinymce",
    # plugins: ["lists"],
    theme: 'silver',
    inline: false,
    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
    menubar: false

  return

