function P (action) {
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

export default run;