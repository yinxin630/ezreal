'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _run = require('./run.js');

var _run2 = _interopRequireDefault(_run);

var _strman = require('strman');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transition = function transition(animation, duration, styles) {
    var actions = [];
    var durations = [];

    var _loop = function _loop(phase) {
        var time = parseFloat(phase) / 100 * duration;
        var actionDuration = time - (durations[durations.length - 1] || -10);
        var propertys = animation[phase];

        var action = function action(cb) {
            var transitionValue = '';
            for (var attr in propertys) {
                if (propertys.hasOwnProperty(attr)) {
                    styles[attr] = propertys[attr];
                    transitionValue += transitionValue === '' ? (0, _strman.toKebabCase)(attr) + ' ' + actionDuration + 'ms' : ',' + (0, _strman.toKebabCase)(attr) + ' ' + actionDuration + 'ms';
                }
            }
            styles['transition'] = transitionValue;
            setTimeout(function () {
                cb();
            }, actionDuration);
        };

        actions.push(action);
        durations.push(time);
    };

    for (var phase in animation) {
        _loop(phase);
    }

    (0, _run2.default)(actions);
};

exports.default = transition;