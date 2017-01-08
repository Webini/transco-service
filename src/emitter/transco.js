'use strict';
const Transcoder    = require('toto-transcoder').transcoder.Transcoder;
const EventEmitter  = require('events');
const LOG_PREFIX    = 'TranscoEmitter';
const bus           = require('./transcoBus.js');
const winston       = require('winston');

const EVENTS = {
  START:    'transcoding.start',
  FAILED:   'transcoding.failed',
  PROGRESS: 'transcoding.progress',
  FINISHED: 'transcoding.finished',
};

class TranscoEmitter extends EventEmitter {
  static get EVENTS() {
    return EVENTS;
  }

  _emit(routingKey, event) {
    bus.publish(routingKey, event);
  }

  emit(eventName, data, ...rest) {
    switch(eventName) {
    case Transcoder.EVENT_START:
      return this._emit(EVENTS.START, data);

    case Transcoder.EVENT_PROGRESS:
      return this._emit(EVENTS.PROGRESS, data);

    case Transcoder.EVENT_FAILED:
      return this._emit(EVENTS.FAILED, data);

    case Transcoder.EVENT_FINISHED:
      return this._emit(EVENTS.FINISHED, data);

    default:
      winston.log(LOG_PREFIX, { msg: 'Event not found', type: eventName, rest: rest, data: data });
    }
  }
}

module.exports = TranscoEmitter;