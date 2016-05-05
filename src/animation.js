'use strict'
import React, { Component } from 'react';
import { effects, effectTypes } from './effects/effects.js';

class Animation extends Component {
    constructor (props) {
        super(props);
    }
    
    componentWillEnter (cb) {
        console.log('animation will enter');
        
        let duration = this.props.duration || 500;
        effects.fade.componentWillEnter.call(this.refs.animation.style, duration);
        setTimeout(cb, duration);
    }
    
    componentDidEnter () {
        console.log('animation did enter');
    }
    
    componentWillLeave (cb) {
        console.log('animation will leave');
        cb();
    }
    
    componentDidLeave () {
        console.log('animation did leave');
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