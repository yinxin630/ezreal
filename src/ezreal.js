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
        return (
            <ReactTransitionGroup>
                { this.props.display ? <Animation {...this.props}/> : undefined }
            </ReactTransitionGroup>
        );
    }
}

module.exports = Ezreal;
export default Ezreal;