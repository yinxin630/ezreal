'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transition = require('../utils/transition.js');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Custom = {
    componentWillAppear: function componentWillAppear(duration, animation) {
        if (animation) {
            (0, _transition2.default)(animation, duration, this);
        }
    },
    componentDidAppear: function componentDidAppear(duration, animation) {
        if (animation) {
            (0, _transition2.default)(animation, duration, this);
        }
    },
    componentWillEnter: function componentWillEnter(duration, animation) {
        if (animation) {
            (0, _transition2.default)(animation, duration, this);
        }
    },
    componentDidEnter: function componentDidEnter(duration, animation) {
        if (animation) {
            (0, _transition2.default)(animation, duration, this);
        }
    },
    componentWillLeave: function componentWillLeave(duration, animation) {
        if (animation) {
            (0, _transition2.default)(animation, duration, this);
        }
    },
    componentDidLeave: function componentDidLeave(duration, animation) {
        if (animation) {
            (0, _transition2.default)(animation, duration, this);
        }
    }
};

exports.default = Custom;