'use strict'
import React, { Component } from 'react';
import effects from './effects/effects.js';

class Animation extends Component {
    static defaultProps = {
        duration: 500,
        type: 'fade'
    };
    
    constructor (props) {
        super(props);
    }
    
    componentWillMount () {
        if (!effects[this.props.type]) {
            throw new Error(`type ${ this.props.type } not exists`);
        }
    }
    
    componentWillEnter (cb) {
        effects[this.props.type].componentWillEnter && effects[this.props.type].componentWillEnter.call(this.refs.animation.style, this.props.duration);
        setTimeout(cb, this.props.duration);
    }
    
    componentDidEnter () {
        effects[this.props.type].componentDidEnter && effects[this.props.type].componentDidEnter.call(this.refs.animation.style, this.props.duration);
    }
    
    componentWillLeave (cb) {
        effects[this.props.type].componentWillLeave && effects[this.props.type].componentWillLeave.call(this.refs.animation.style, this.props.duration);
        setTimeout(cb, this.props.duration);
    }
    
    componentDidLeave () {
        effects[this.props.type].componentDidLeave && effects[this.props.type].componentDidLeave.call(this.refs.animation.style, this.props.duration);
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