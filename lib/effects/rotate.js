'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transition = require('../utils/transition.js');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rotate = {
    componentWillAppear: function componentWillAppear(duration) {
        Rotate.componentWillEnter.call(this, duration);
    },
    componentWillEnter: function componentWillEnter(duration) {
        (0, _transition2.default)({
            0: {
                transform: 'scale(0.6) rotate(0deg)'
            },
            100: {
                transform: 'scale(1) rotate(360deg)'
            }
        }, duration, this);
    },
    componentWillLeave: function componentWillLeave(duration) {
        (0, _transition2.default)({
            0: {
                transform: 'scale(1) rotate(360deg)'
            },
            100: {
                transform: 'scale(0.6) rotate(0deg)'
            }
        }, duration, this);
    }
};

exports.default = Rotate;