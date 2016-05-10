'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transition = require('../utils/transition.js');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drop = {
    componentWillAppear: function componentWillAppear(duration) {
        Drop.componentWillEnter.call(this, duration);
    },
    componentWillEnter: function componentWillEnter(duration) {
        (0, _transition2.default)({
            0: {
                transform: 'translate(0px, -150px)',
                opacity: 0.01
            },
            100: {
                transform: 'translate(0px, 0px)',
                opacity: 1
            }
        }, duration, this);
    },
    componentWillLeave: function componentWillLeave(duration) {
        (0, _transition2.default)({
            0: {
                transform: 'translate(0px, 0px)',
                opacity: 1
            },
            100: {
                transform: 'translate(0px, 150px)',
                opacity: 0.01
            }
        }, duration, this);
    }
};

exports.default = Drop;