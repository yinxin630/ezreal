'use strict'
import React, { Component } from 'react';
import effects from './effects/effects.js';

const types = [];
Object.keys(effects).forEach(effect => types.push(...[effect + '-appear', effect + '-enter', effect + '-leave', effect + '-enter-leave']));

class Animation extends Component {
    static defaultProps = {
        duration: 500,
        type: 'fade',
        animations: {}
    };
    
    static propTypes = {
        duration: React.PropTypes.number,
        type: React.PropTypes.oneOf(types),
        animations: React.PropTypes.object
    };
    
    constructor (props) {
        super(props);
    }
    
    componentWillAppear (cb) {
        let { type, duration, animations } = this.props;
        
        if (type.match(/appear/)) {
            type = type.slice(0, type.indexOf('-'));
            effects[type].componentWillAppear && effects[type].componentWillAppear.call(this.refs.animation.style, duration, animations.componentWillAppear);
            setTimeout(cb, duration);
        }
        else {
            cb();
        }
    }
    
    componentDidAppear () {
        let { type, duration, animations } = this.props;
        type = type.slice(0, type.indexOf('-'));
        effects[type].componentDidAppear && effects[type].componentDidAppear.call(this.refs.animation.style, duration, animations.componentDidAppear);
    }
    
    componentWillEnter (cb) {
        let { type, duration, animations } = this.props;
        
        if (type.match(/enter/)) {
            type = type.slice(0, type.indexOf('-'));
            effects[type].componentWillEnter && effects[type].componentWillEnter.call(this.refs.animation.style, duration, animations.componentWillEnter);
            setTimeout(cb, duration);
        }
        else {
            cb();
        }
    }
    
    componentDidEnter () {
        let { type, duration, animations } = this.props;
        type = type.slice(0, type.indexOf('-'));
        effects[type].componentDidEnter && effects[type].componentDidEnter.call(this.refs.animation.style, duration, animations.componentDidEnter);
    }
    
    componentWillLeave (cb) {
        let { type, duration, animations } = this.props;
        
        if (type.match(/leave/)) {
            type = type.slice(0, type.indexOf('-'));
            effects[type].componentWillLeave && effects[type].componentWillLeave.call(this.refs.animation.style, duration, animations.componentWillLeave);
            setTimeout(cb, this.props.duration);
        }
        else {
            cb();
        }
    }
    
    componentDidLeave () {
        let { type, duration, animations } = this.props;
        type = type.slice(0, type.indexOf('-'));
        effects[type].componentDidLeave && effects[type].componentDidLeave.call(this.refs.animation.style, duration, animations.componentDidLeave);
    }
    
    render () {
        return (
            <div style={ style } ref="animation">
                { this.props.children }
            </div>
        );
    }
}

const style = {
    display: 'inline-block'
};

export default Animation;