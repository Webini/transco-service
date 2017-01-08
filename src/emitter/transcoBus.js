const RABBITMQ_TRANSCODING_EXCHANGE = process.env.RABBITMQ_EXCHANGE || 'amq.topic';
const bus = require('../bus.js');

const defaultOptions   = { 
  exchangeName: RABBITMQ_TRANSCODING_EXCHANGE,
  exchangeOptions: {
    durable: true,
    type: 'topic',
    autoDelete: false
  }
};

const inst = bus.create();

inst.use(inst.correlate());

inst._publish = inst.publish;
inst.publish = function(queueName, message, options, cb) {
  const newOptions = options || defaultOptions;
  this._publish.apply(this, [ queueName, message, newOptions, cb ]);
};

module.exports = inst;