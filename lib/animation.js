'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _effects = require('./effects/effects.js');

var _effects2 = _interopRequireDefault(_effects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = [];
Object.keys(_effects2.default).forEach(function (effect) {
    return types.push.apply(types, [effect + '-appear', effect + '-enter', effect + '-leave', effect + '-enter-leave']);
});

var Animation = function (_Component) {
    _inherits(Animation, _Component);

    function Animation(props) {
        _classCallCheck(this, Animation);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Animation).call(this, props));
    }

    _createClass(Animation, [{
        key: 'componentWillAppear',
        value: function componentWillAppear(cb) {
            var _props = this.props;
            var type = _props.type;
            var duration = _props.duration;
            var animations = _props.animations;


            if (type.match(/appear/)) {
                type = type.slice(0, type.indexOf('-'));
                _effects2.default[type].componentWillAppear && _effects2.default[type].componentWillAppear.call(this.refs.animation.style, duration, animations.componentWillAppear);
                setTimeout(cb, duration);
            } else {
                cb();
            }
        }
    }, {
        key: 'componentDidAppear',
        value: function componentDidAppear() {
            var _props2 = this.props;
            var type = _props2.type;
            var duration = _props2.duration;
            var animations = _props2.animations;

            type = type.slice(0, type.indexOf('-'));
            _effects2.default[type].componentDidAppear && _effects2.default[type].componentDidAppear.call(this.refs.animation.style, duration, animations.componentDidAppear);
        }
    }, {
        key: 'componentWillEnter',
        value: function componentWillEnter(cb) {
            var _props3 = this.props;
            var type = _props3.type;
            var duration = _props3.duration;
            var animations = _props3.animations;


            if (type.match(/enter/)) {
                type = type.slice(0, type.indexOf('-'));
                _effects2.default[type].componentWillEnter && _effects2.default[type].componentWillEnter.call(this.refs.animation.style, duration, animations.componentWillEnter);
                setTimeout(cb, duration);
            } else {
                cb();
            }
        }
    }, {
        key: 'componentDidEnter',
        value: function componentDidEnter() {
            var _props4 = this.props;
            var type = _props4.type;
            var duration = _props4.duration;
            var animations = _props4.animations;

            type = type.slice(0, type.indexOf('-'));
            _effects2.default[type].componentDidEnter && _effects2.default[type].componentDidEnter.call(this.refs.animation.style, duration, animations.componentDidEnter);
        }
    }, {
        key: 'componentWillLeave',
        value: function componentWillLeave(cb) {
            var _props5 = this.props;
            var type = _props5.type;
            var duration = _props5.duration;
            var animations = _props5.animations;


            if (type.match(/leave/)) {
                type = type.slice(0, type.indexOf('-'));
                _effects2.default[type].componentWillLeave && _effects2.default[type].componentWillLeave.call(this.refs.animation.style, duration, animations.componentWillLeave);
                setTimeout(cb, this.props.duration);
            } else {
                cb();
            }
        }
    }, {
        key: 'componentDidLeave',
        value: function componentDidLeave() {
            var _props6 = this.props;
            var type = _props6.type;
            var duration = _props6.duration;
            var animations = _props6.animations;

            type = type.slice(0, type.indexOf('-'));
            _effects2.default[type].componentDidLeave && _effects2.default[type].componentDidLeave.call(this.refs.animation.style, duration, animations.componentDidLeave);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: style, ref: 'animation' },
                this.props.children
            );
        }
    }]);

    return Animation;
}(_react.Component);

Animation.defaultProps = {
    duration: 500,
    type: 'fade',
    animations: {}
};
Animation.propTypes = {
    duration: _react2.default.PropTypes.number,
    type: _react2.default.PropTypes.oneOf(types),
    animations: _react2.default.PropTypes.object
};


var style = {
    display: 'inline-block'
};

exports.default = Animation;