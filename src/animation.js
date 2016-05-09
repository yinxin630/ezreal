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
    
    componentWillMount () {
        if (!effects[this.props.type]) {
            throw new Error(`type ${ this.props.type } not exists`);
        }
    }
    
    componentWillAppear (cb) {
        let { type, duration, animations } = this.props;
        effects[type].componentWillAppear && effects[type].componentWillAppear.call(this.refs.animation.style, duration, animations.componentWillAppear);
        setTimeout(cb, duration);
    }
    
    componentDidAppear () {
        let { type, duration, animations } = this.props;
        effects[type].componentDidAppear && effects[type].componentDidAppear.call(this.refs.animation.style, duration, animations.componentDidAppear);
    }
    
    componentWillEnter (cb) {
        let { type, duration, animations } = this.props;
        effects[type].componentWillEnter && effects[type].componentWillEnter.call(this.refs.animation.style, duration, animations.componentWillEnter);
        setTimeout(cb, duration);
    }
    
    componentDidEnter () {
        let { type, duration, animations } = this.props;
        effects[type].componentDidEnter && effects[type].componentDidEnter.call(this.refs.animation.style, duration, animations.componentDidEnter);
    }
    
    componentWillLeave (cb) {
        let { type, duration, animations } = this.props;
        effects[type].componentWillLeave && effects[type].componentWillLeave.call(this.refs.animation.style, duration, animations.componentWillLeave);
        setTimeout(cb, this.props.duration);
    }
    
    componentDidLeave () {
        let { type, duration, animations } = this.props;
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