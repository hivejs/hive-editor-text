var bindTextarea = require('gulf-textarea')

module.exports = setup
module.exports.consumes = ['editor']
module.exports.provides = []
function setup(plugin, imports, register) {
  var editor = imports.editor
  
  editor.registerEditor('plaintext', function*() {
    var textarea = document.createElement('textarea')
    textarea.setAttribute('id', 'content')
    var editor = document.querySelector('#editor')
    editor.appendChild(textarea)

    editor.style['height'] = '100%'
    document.body.style['position'] = 'absolute'
    document.body.style['bottom'] = 
    document.body.style['top'] = 
    document.body.style['left'] =
    document.body.style['right'] = '0'
    textarea.style['height'] = '100%'
    textarea.style['width'] = '100%'
    textarea.style['border'] = '0'

    return bindTextarea(textarea)
  })
  register()
}
