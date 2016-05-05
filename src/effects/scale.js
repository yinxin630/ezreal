import transition from '../utils/transition.js';

const Scale = {
    componentWillEnter (duration) {
        transition({
            0: {
                transform: 'scale(0)'
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
                transform: 'scale(0)'
            }
        }, duration, this);
    }
};

export default Scale;