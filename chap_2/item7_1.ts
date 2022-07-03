namespace chap2_item7 { // page 31
    interface Person {
        name: string;
    }
    interface Lifespan {
        birth: Date;
        death?: Date;
    }
    type PersonSpan = Person & Lifespan;
    let x: PersonSpan = { name: 'adnan', birth: new Date(), death: new Date() };
    let test = () => { console.log(x); };
    test();

    type K = keyof (Person | Lifespan); // K is empty set
    // let y: K = {}; // Type '{}' is not assignable to type 'never'
    // keyof(A&B) = (keyof A) | (keyof B);
    // keyof(A|B) = (keyof A) & (keyof B);
    function check_extends() {
        function getKey<K extends string>(val: any, key: K) {
            // K is any type whose domain is a subset of string
        }
        interface Point {
            x: number;
            y: number;
        }
        type PointKeys = keyof Point; // Type is "x" | "y"
        function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
            // ...
            return vals;
        }
        const pts: Point[] = [{ x: 1, y: 1 }, { x: 2, y: 0 }];
        sortBy(pts, 'x'); // OK, 'x' extends 'x'|'y' (aka keyof T)
        sortBy(pts, 'y'); // OK, 'y' extends 'x'|'y'
        sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // OK, 'x'|'y' extends 'x'|'y'
        // sortBy(pts, 'z'); error

        /* const list = [1, 2]; // Type is number[]
        const tuple: [number, number] = list; error */
        const tuple: [number, number] = [1, 2];
        const list = tuple; // works

        const triple: [number, number, number] = [1, 2, 3];
        // triple.length = 2 // real error
        // const double: [number, number] = triple; // error  Source has 3 element(s) but target allows only 2

        // page 34 // Exclude
        type T = Exclude<number, 0>; // does not work as expected, as there is not typescript for non-zero numbers
        let a_non_zero_num: T = 0;

        type D = Exclude<string|Date, string|number>;
        // let a_date: D = '2 May 2022'; // error
        let a_date: D = new Date();
    }

}