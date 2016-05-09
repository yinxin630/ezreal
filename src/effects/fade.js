import transition from '../utils/transition.js';

const Fade = {
    componentWillAppear (duration) {
        Fade.componentWillEnter.call(this, duration);
    },
    
    componentWillEnter (duration) {
        transition({
            0: {
                opacity: 0.01,
            },
            100: {
                opacity: 1
            }
        }, duration, this);
    },
    
    componentWillLeave (duration) {
        transition({
            0: {
                opacity: 1
            },
            100: {
                opacity: 0.01
            }
        }, duration, this);
    }
};

export default Fade;