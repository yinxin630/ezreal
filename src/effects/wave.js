import transition from '../utils/transition.js';

const Wave = {
    componentWillAppear (duration) {
        Wave.componentWillEnter.call(this, duration);
    },
    
    componentWillEnter (duration) {
        transition({
            0: {
                transform: 'scale(1)'
            },
            33: {
                transform: 'scale(1.05)'
            },
            66: {
                transform: 'scale(0.97)'
            },
            100: {
                transform: 'scale(1)'
            }
        }, duration, this);
    },
    
    componentWillLeave (duration) {
        transition({
            0: {
                transform: 'scale(1)'
            },
            100: {
                transform: 'scale(0.5)'
            }
        }, duration, this);
    }
};

export default Wave;