/* Type operations cannot affect runtime values */

/* function asNumber(val: number | string): number {
    return val as number; // does not work
} */

/* To normalize the value you’ll need
to check its runtime type and do the conversion using JavaScript constructs */
namespace chap1_3_4 {
    function asNumber(val: number | string): number {
        return typeof (val) === 'string' ? Number(val) : val;
    }
}
