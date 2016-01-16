var bindTextarea = require('gulf-textarea')

module.exports = setup
module.exports.consumes = ['editor']
module.exports.provides = []
function setup(plugin, imports, register) {
  var editor = imports.editor

  editor.registerEditor('Textarea', 'text/plain', 'Just a textarea, nothing more'
  , function(el) {
    var textarea = document.createElement('textarea')
    textarea.setAttribute('id', 'content')
    el.appendChild(textarea)

    el.style['height'] = '100%'
    textarea.style['height'] = '100%'
    textarea.style['width'] = '100%'
    textarea.style['border'] = '0'

    return Promise.resolve(bindTextarea(textarea))
  })
  register()
}
