'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fade = require('./fade.js');

var _fade2 = _interopRequireDefault(_fade);

var _scale = require('./scale.js');

var _scale2 = _interopRequireDefault(_scale);

var _wave = require('./wave.js');

var _wave2 = _interopRequireDefault(_wave);

var _rotate = require('./rotate.js');

var _rotate2 = _interopRequireDefault(_rotate);

var _drop = require('./drop.js');

var _drop2 = _interopRequireDefault(_drop);

var _fly = require('./fly.js');

var _fly2 = _interopRequireDefault(_fly);

var _custom = require('./custom.js');

var _custom2 = _interopRequireDefault(_custom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var effects = {
    fade: _fade2.default,
    scale: _scale2.default,
    wave: _wave2.default,
    rotate: _rotate2.default,
    drop: _drop2.default,
    fly: _fly2.default,
    custom: _custom2.default
};

exports.default = effects;