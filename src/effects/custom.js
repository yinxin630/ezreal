import transition from '../utils/transition.js';

const fade = {
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

export default fade;