'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transition = require('../utils/transition.js');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scale = {
    componentWillAppear: function componentWillAppear(duration) {
        Scale.componentWillEnter.call(this, duration);
    },
    componentWillEnter: function componentWillEnter(duration) {
        (0, _transition2.default)({
            0: {
                transform: 'scale(0.5)'
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

exports.default = Scale;