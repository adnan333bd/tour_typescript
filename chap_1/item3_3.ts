/*Item 3: Understand That Code Generation Is Independent of Types */
/* You Cannot Check TypeScript Types at Runtime */

/* interface Square {
    width: number;
}
interface Rectangle extends Square {
    height: number;
}
type Shape = Square | Rectangle;
function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        // ~~~~~~~~~ 'Rectangle' only refers to a type,
        // but is being used as a value here
        return shape.width * shape.height;
        // ~~~~~~ Property 'height' does not exist
        // on type 'Shape'
    } else {
        return shape.width * shape.width;
    }
} */

/* The instanceof check happens at runtime, but Rectangle is a type and so it cannot
affect the runtime behavior of the code. TypeScript types are “erasable”: part of compilation
to JavaScript is simply removing all the interfaces, types, and type annotations
from your code. */

namespace chap1_3_3 {
    // option 3
    class Square {
        constructor(public width: number) { }
    }
    class Rectangle extends Square {
        constructor(public width: number, public height: number) {
            super(width);
        }
    }
    type Shape = Square | Rectangle;
    function calculateArea(shape: Shape) {
        if (shape instanceof Rectangle) { // Rectangle is a function so, its an object
            return shape.width * shape.height; // Type is Recatangle
        } else {
            return shape.width * shape.width; // Type is Square
        }
    }
}
