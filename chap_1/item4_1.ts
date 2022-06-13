/* As you write functions, it’s easy to imagine that they will be called with arguments
having the properties you’ve declared and no others. This is known as a “sealed” or
“precise” type, and it cannot be expressed in TypeScript’s type system. Like it or not,
your types are “open.” */


namespace chap3_item4 {
    /* Item 4: Get Comfortable with Structural Typing | 17 */
    interface Vector3D {
        x: number;
        y: number;
        z: number;
    }

    /* function calculateLengthL1(v: Vector3D) {
        let length = 0;
        // type ax = 'x' | 'y' | 'z';
        for (const axis of Object.keys(v)) {
            const coord = v[axis];
            // ~~~~~~~ Element implicitly has an 'any' type because ...
            // 'string' can't be used to index type 'Vector3D'
            length += Math.abs(coord);
        }
        return length;
    } */

    /* without loop */


    function calculateLengthL1(v: Vector3D) {
        return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
    }

    interface Author {
        first: string;
        last: string;
    }
    /* function getAuthors(database: PostgresDB): Author[] {
        const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
        return authorRows.map(row => ({ first: row[0], last: row[1] }));
    } modify this to the following */

    interface DB {
        runQuery: (sql: string) => any[];
    }
    function getAuthors(database: DB): Author[] {
        const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
        return authorRows.map(row => ({ first: row[0], last: row[1] }));
    }

    /* test('getAuthors', () => {
        const authors = getAuthors({
            runQuery(sql: string) {
                return [['Toni', 'Morrison'], ['Maya', 'Angelou']];
            }
        });
        expect(authors).toEqual([
            { first: 'Toni', last: 'Morrison' },
            { first: 'Maya', last: 'Angelou' }
        ]);
    }); */

}