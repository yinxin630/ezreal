'use strict'

import run from './run.js';
import { toKebabCase } from 'strman';

const transition = function (animation, duration, styles) {
    let actions = [];
    let durations = [];
    
    for (let phase in animation) {
        let time = parseFloat(phase) / 100 * duration;
        let actionDuration = time - (durations[durations.length - 1] || -10);
        let propertys = animation[phase];
        
        let action = (cb) => {
            let transitionValue = '';
            for (let attr in propertys) {
                if (propertys.hasOwnProperty(attr)) {
                    styles[attr] = propertys[attr];
                    transitionValue += transitionValue === '' ? `${ toKebabCase(attr) } ${ actionDuration }ms` : `,${ toKebabCase(attr) } ${ actionDuration }ms`;
                }
            }
            styles['transition'] = transitionValue;
            setTimeout(() => {
                cb();
            }, actionDuration);
        };
        
        actions.push(action);
        durations.push(time);
    }
    
    run(actions);
};

export default transition;