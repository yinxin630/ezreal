'use strict'
import React, { Component } from 'react';
import { effects, effectTypes } from './effects/effects.js';

class Animation extends Component {
    static defaultProps = {
        duration: 500
    };
    
    constructor (props) {
        super(props);
    }
    
    componentWillEnter (cb) {
        console.log('animation will enter');
        
        effects.fade.componentWillEnter.call(this.refs.animation.style, this.props.duration);
        setTimeout(cb, this.props.duration);
    }
    
    componentDidEnter () {
        console.log('animation did enter');
    }
    
    componentWillLeave (cb) {
        console.log('animation will leave');
        
        effects.fade.componentWillLeave.call(this.refs.animation.style, this.props.duration);
        setTimeout(cb, this.props.duration);
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