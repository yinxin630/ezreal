'use strict'

// transition delay
const delay = 10;

// const transition = {
//     begin: function (styles, duration, property) {
//         for (let attr in property) {
//             if (styles.hasOwnProperty(attr)) {
//                 styles[attr] = property[attr];
//             }
//         }
//     },
    
//     end: function (styles, duration, property) {
//         setTimeout(() => {
//             let actions = '';
//             for (let attr in property) {
//                 if (styles.hasOwnProperty(attr)) {
//                     styles[attr] = property[attr];
//                     actions += actions === '' ? `${ attr } ${ duration }ms` : `,${ attr } ${ duration }ms`;
//                 }
//             }
//             console.log(actions);
//             styles['transition'] = actions;
//         }, delay);
//     }
// };

const P = (action) => {
    return () => {
        return new Promise(resolve => {
            action(resolve);
        });
    };
}

function run (actions) {
    var first = P(actions[0])();
    for (var index = 1; index < actions.length; index++) {
        first = first.then(P(actions[index]));
    }
}

const transition = function (animation, duration, styles) {
    let actions = [];
    let durations = [];
    let index = 0;
    
    for (let phase in animation) {
        let time = (parseFloat(phase) - (durations[durations.length - 1] || 0)) * duration / 100;
        let propertys = animation[phase];
        console.log(parseFloat(phase), time);
        
        let action = (cb) => {
            setTimeout(() => {
                let transitionValue = '';
                for (let attr in propertys) {
                    if (propertys.hasOwnProperty(attr)) {
                        styles[attr] = propertys[attr];
                        transitionValue += transitionValue === '' ? `${ 'background-color' } ${ time }ms` : `,${ attr } ${ time }ms`;
                    }
                }
                styles['transition'] = transitionValue;
                cb();
            }, time);
        };
        
        actions.push(action);
        durations.push(parseFloat(phase));
    }
    
    console.log(actions);
    run(actions);
};

export default transition;