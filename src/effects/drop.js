import transition from '../utils/transition.js';

const Drop = {
    componentWillEnter (duration) {
        transition({
            0: {
                transform: 'translate(0px, -150px)',
                opacity: 0.01
            },
            100: {
                transform: 'translate(0px, 0px)',
                opacity: 1
            }
        }, duration, this);
    },
    
    componentWillLeave (duration) {
        transition({
            0: {
                transform: 'translate(0px, 0px)',
                opacity: 1
            },
            100: {
                transform: 'translate(0px, 150px)',
                opacity: 0.01
            }
        }, duration, this);
    }
};

export default Drop;