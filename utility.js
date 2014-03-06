var p = require('path')
  , f = require('fs')

f.readdirSync(p.join(__dirname, 'src')).forEach(function(file){ require(p.join(__dirname, 'src', file)) })