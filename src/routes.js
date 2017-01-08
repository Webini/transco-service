const apiConstraints     = require('./middlewares/apiConstraints.js');
const processableCtrl    = require('./controllers/processable.js');

module.exports = (app) => {
  app.post('/processable', 
    apiConstraints(processableCtrl.LOG_PREFIX, processableCtrl.indexConstraints), 
    processableCtrl.index
  );
};
