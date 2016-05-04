'use strict'
import React, { Component } from 'react';

class Animation extends Component {
    constructor (props) {
        super(props);
    }
    
    componentWillEnter (cb) {
        console.log('animation will enter');
        cb();
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
            <div style={ style }>
                { this.props.children }
            </div>
        );
    }
}

const style = {
    dispaly: 'inline-block'
};

export default Animation;