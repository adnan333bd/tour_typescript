"use strict";
/* As you write functions, it’s easy to imagine that they will be called with arguments
having the properties you’ve declared and no others. This is known as a “sealed” or
“precise” type, and it cannot be expressed in TypeScript’s type system. Like it or not,
your types are “open.” */
var chap1_item4;
(function (chap1_item4) {
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
    /* solution 1: without loop */
    function calculateLengthL1(v) {
        return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
    }
    function getAuthors(database) {
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
})(chap1_item4 || (chap1_item4 = {}));
