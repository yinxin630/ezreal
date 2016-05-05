import transition from '../utils/transition.js';

const fade = {
    componentWillEnter (duration) {
        transition({
            0: {
                backgroundColor: 'red'
            },
            25: {
                backgroundColor: 'yellow',
                transform: 'scale(2) rotate(180deg)'
            },
            50: {
                backgroundColor: 'blue',
                transform: 'scale(0.5) rotate(-180deg)'
            },
            100: {
                backgroundColor: 'green',
                transform: 'scale(1)'
            }
        }, duration, this);
    }
};

export default fade;