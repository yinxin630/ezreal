import transition from '../utils/transition.js';

const Custom = {
    componentWillAppear (duration, animation) {
        if (animation) {
            transition(animation, duration, this);
        }
    },
    
    componentDidAppear (duration, animation) {
        if (animation) {
            transition(animation, duration, this);
        }
    },
    
    componentWillEnter (duration, animation) {
        if (animation) {
            transition(animation, duration, this);
        }
    },
    
    componentDidEnter (duration, animation) {
        if (animation) {
            transition(animation, duration, this);
        }
    },
    
    componentWillLeave (duration, animation) {
        if (animation) {
            transition(animation, duration, this);
        }
    },
    
    componentDidLeave (duration, animation) {
        if (animation) {
            transition(animation, duration, this);
        }
    },
};

export default Custom;