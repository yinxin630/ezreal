'use strict'
import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import Animation from './animation.js';

class Ezreal extends Component {
    static defaultProps = {
        display: true
    };
    
    constructor (props) {
        super(props);
    }
    
    render () {
        let { display, style, containerStyle, ...other } = this.props;
        
        return (
            <ReactTransitionGroup style={ style }>
                { display ? <Animation style={ containerStyle } {...other}/> : undefined }
            </ReactTransitionGroup>
        );
    }
}

module.exports = Ezreal;
export default Ezreal;