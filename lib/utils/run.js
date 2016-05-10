"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function P(action) {
    return function () {
        return new Promise(function (resolve) {
            action(resolve);
        });
    };
}

function run(actions) {
    var first = P(actions[0])();
    for (var index = 1; index < actions.length; index++) {
        first = first.then(P(actions[index]));
    }
}

exports.default = run;