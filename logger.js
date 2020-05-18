const codegen = require('debug')('codegen')
exports.info = codegen.extend('INFO')
exports.warn = codegen.extend('WARNING')
exports.error = codegen.extend('ERROR')
exports.debug = codegen.extend('DEBUG')
require('debug').enable(process.env.DEBUG || 'codegen:INFO,codegen:WARNING,codegen:ERROR')