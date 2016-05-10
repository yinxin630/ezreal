'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transition = require('../utils/transition.js');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wave = {
    componentWillAppear: function componentWillAppear(duration) {
        Wave.componentWillEnter.call(this, duration);
    },
    componentWillEnter: function componentWillEnter(duration) {
        (0, _transition2.default)({
            0: {
                transform: 'scale(1)'
            },
            33: {
                transform: 'scale(1.05)'
            },
            66: {
                transform: 'scale(0.97)'
            },
            100: {
                transform: 'scale(1)'
            }
        }, duration, this);
    },
    componentWillLeave: function componentWillLeave(duration) {
        (0, _transition2.default)({
            0: {
                transform: 'scale(1)'
            },
            100: {
                transform: 'scale(0.5)'
            }
        }, duration, this);
    }
};

exports.default = Wave;