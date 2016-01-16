var path = require('path')
  , textOT = require('ot-text').type

module.exports = setup
module.exports.consumes = ['ui', 'ot', 'importexport']

function setup(plugin, imports, register) {
  var ui = imports.ui
    , ot = imports.ot
    , importexport = imports.importexport

  ui.registerModule(path.join(__dirname, 'client.js'))

  ot.registerOTType('text/plain', textOT)

  importexport.registerExportProvider('text/plain', 'text/plain'
  , function* (document, snapshot) {
    return snapshot.contents
  })

  register()
}
