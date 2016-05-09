import transition from '../utils/transition.js';

const Rotate = {
    componentWillAppear (duration) {
        Rotate.componentWillEnter.call(this, duration);
    },
    
    componentWillEnter (duration) {
        transition({
            0: {
                transform: 'scale(0.6) rotate(0deg)'
            },
            100: {
                transform: 'scale(1) rotate(360deg)'
            }
        }, duration, this);
    },
    
    componentWillLeave (duration) {
        transition({
            0: {
                transform: 'scale(1) rotate(360deg)'
            },
            100: {
                transform: 'scale(0.6) rotate(0deg)'
            }
        }, duration, this);
    }
};

export default Rotate;