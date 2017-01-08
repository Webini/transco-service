const LOG_PREFIX = 'ProcessableController';
const transcoder = require('../service/transcoder');

module.exports = {
  LOG_PREFIX: LOG_PREFIX,
  
  indexConstraints: {
    preset: { presence: true }
  },

  index: (req, res, next) => {
    const preset = req.body.preset;
    res.apiSuccess({
      processable: transcoder.canProcess(preset)
    });
  }
};