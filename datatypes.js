/**
 * 0: Data types are ways of categorizing information to create taxonomies of behavior / use. They correspond to prototype objects 
 * that have specific prototype methods attached to them that facilitate manipulation of the given data. They are often divided 
 * between simple and complex types.
 * 
 * 1: A number data type can be positive or negative. Can be an integer or a float (decimal). Numbers can only be of a certain 
 * size before they must be represented by approximation or special notation. A simple data type.
 * 
 * 2: A series of alphabetic, numeric, or symbolic characters. Strings are denoted through being surrounded by either single 
 * or double quotes. Strings have their own specific methods of manipulation. Like other simple data types strings are immutable, 
 * and copy by value. String methods create newstrings based on the current string. Each character of a string corresponds to a 
 * numeric index starting with 0, similar to arrays.
 * 
 * 3: Booleans provide a binary system of analysis--true or false. usually used to handle conditional logic. A simple data type.
 * 
 * 4: Arrays are a complex data type. They are comprised of an indexed series of elements, beginning at 0. Arrays are denoted 
 * by square brackets, with elements divided by commas. Arrays can homogenous or heterogenous in terms of composition, but are 
 * primarily homogenous (comprised of one datat type). Arrays can contain both simple and / or complex data types, including more
 * arrays. An array of arrays is called a matrix.
 * 
 * 5: An object is another complex data type, but rather than an indexed list it is comprised of properties--pairs wherein a descriptive
 *  key string corresponds to a value of any type. Objects can have both different data types and functions (methods) as properties 
 * of it. 
 * 
 * 6: A function is itself a data type, though a more complex and dynamic type. Functions have a declaration followed by a block
 * of code. The code can be seen as a set of instructions for executing a task of data manipulation. Functions often take in data
 * through parameters, and return data via a return statement--though neither are strictly required. Functions are separated into 
 * 2 distinct phases of use--the declaration and the call, or invocation. In declaration the instructions are defined, and in the 
 * call they are put to use on specific arguments passed into the parameters.
 * 
 * 7: Undefined is a simple data type that corresponds to a variable that has been declared but not defined. A function returns 
 * undefined if it does not return a value. Undefined is falsey, but distinct from other falsey values like 0, and null. 
 * 
 * 8: Null is both falsy and primitive and similarly to undefined indicates an absence of information. However null is an assignment
 * value, hence a more intentional form of absence, whereas undefined indicates a declared variable that has not been assigned a value. 
 * Though null is a primitive type it returns "object" when its type is checked. 
 * 
 * 9: NaN stands for "Not a Number" and is returned whenever an operation involving a number would result in something other than 
 * a number--for example, multiplying a number by a string. This can also happen by creating functions with numbers and other
 *  undefined or empty elements.NaN is contagious in that operations involving NaN also become NaN. NaN is falsy.  
 * 
 * 10: Infinity is a numeric value representing infinity, it is written as "Infinity" without the quotation marks. Positive Infinity
 * is greaater than any number. Positive infinity and mathematical infinity behave in slightly different ways. Any value mutliplied
 * by positive infinity results in positivie infinity. Any value multiplied by negative infinity results in negative infinity. 
 * 
 * 11: As mentioned data types are divided by being either complex or simple. Simple types areL strings, numbers, booleans, null,
 * undefined and "symbols" (not discussed). Complex types are: objects, arrays, functions, maps and sets (maps and sets are not 
 * discussed here). Simple data cannot have additional properties or methods, and contain a "single" value. Note although there are 
 * "string methods" these derive from a prototype object, a complex data type. Complex data types can have multiple values and in 
 * some cases nested structure (arrays within arrays, functions within functions, objects within functions etc).
 * 
 * 12: Complex data types copy by reference--meaning that when you assign one variable to another, you are simply copying the memory 
 * address of the original, essentially creating another door into the same home. Whereas copying by value, creates an entirely new
 * variable / value to exist and modify. Copying by reference risks "mutating" the data, creating modifications that may have unforseen
 * consequences for other dependencies. 
 */

// 1: various numbers initialized and subjected to math operations:
let a = 5;
let b = 2.5;
let negA = -5;
let stringyNum = "5";

let product = a * b;
console.log(product);//->prints 12.5

let negProduct = negA * b;
console.log(negProduct);//->prints -12.5

let stringyProduct = stringyNum * b;
console.log(stringyProduct);//->Weirdly you can even do math on numeric strings.

// 2:

// 3:

// 4:

// 5:

// 6:

// 7:

// 8:

// 9:

// 10:

// 11:

// 12:
