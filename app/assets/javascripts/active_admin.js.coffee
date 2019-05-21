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
    selector: "textarea.tinymce"
    theme: 'silver',
    inline: false,
    toolbar: true,
    menubar: false,
    plugins: [ 'quickbars' ]
  return

