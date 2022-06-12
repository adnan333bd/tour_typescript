"use strict";
/* Runtime Types May Not Be the Same as Declared Types */
function setLightSwitch(value) {
    switch (value) {
        case true:
            // turnLightOn();
            break;
        case false:
            // turnLightOff();
            break;
        default:
            console.log(`I'm afraid I can't do that.`); // can be called at runtime
    }
}
