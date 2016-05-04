'use strict'
import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import Animation from './animation.js';

class Darius extends Component {
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
    
    show () {
        this.setState({ show: true });
    }
    
    hidden () {
        this.setState({ show: false });
    }
}

export default Darius;