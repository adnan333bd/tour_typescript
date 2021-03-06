"use strict";
/* Type operations cannot affect runtime values */
/* function asNumber(val: number | string): number {
    return val as number; // does not work
} */
/* To normalize the value you’ll need
to check its runtime type and do the conversion using JavaScript constructs */
var chap1_3_4;
(function (chap1_3_4) {
    function asNumber(val) {
        return typeof (val) === 'string' ? Number(val) : val;
    }
})(chap1_3_4 || (chap1_3_4 = {}));
