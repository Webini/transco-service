const toto    = require('toto-transcoder');
const Emitter = require('../emitter/transco.js');
const config  = require(`../../config/${process.env.CONFIG_NAME || 'default'}.json`);

module.exports = toto.transcoder({ 
  emitter: new Emitter(),
  conf: config 
});