/** 
 * hive.js 
 * Copyright (C) 2013-2016 Marcel Klehr <mklehr@gmx.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Mozilla Public License version 2
 * as published by the Mozilla Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the Mozilla Public License
 * along with this program.  If not, see <https://www.mozilla.org/en-US/MPL/2.0/>.
 */
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
