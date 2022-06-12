namespace chap1_3_5 {

    /* Runtime Types May Not Be the Same as Declared Types */
    function setLightSwitch(value: boolean) {
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

    /* You Cannot Overload a Function Based on TypeScript Types */

    /* function add(a: number, b: number) { return a + b; }
    // ~~~ Duplicate function implementation
    function add(a: string, b: string) { return a + b; }
    // ~~~ Duplicate function implementation */
}
