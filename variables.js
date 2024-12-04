/**
 * 0: Variables are named containers for storing data, or ways of pointing at data. They correspond to one of a number of data
*     types to be discussed later. Variables are comprised of syntax, sometimes referred to as a Binding, that carves out space
     in memory. 
 * 
 * 1. Declaration and Assignment: In order to create a variable we must first `declare` it. To do this you use a declarative keyword
 * (such as var, let, or const) followed by the name you wish to give your variable in camel case. This will be the name you use to 
 * reference its value later. After declaration you assign the variable a value, which varies depending on your use case and intended 
 * data type. Doing both declaration and assignment simulataneously is referred to as initialization. 
 * 
 * 2. Var, let, const: There are three declarative keywords that can be used to declare variables--var, let, const. var is historically
 * the first declarative keyword, with let and const being added in ES6. var has a shortcoming in that it does not have block scoping, 
 * meaning it will be accessible (hence overwritable) throughout an entire function. const can be block scoped, but as the name constant 
 * implies, cannot be reassigned to a new value, thus it is a very secure / stable data type. let exists in between these levels of 
 * permisiveness--it can be block scoped, but also overwritten.   
 * 
 * 3: Hoisting: Is a feature of javascript in which variable declarations are invisibly brought to the beginning of their scope before 
 * being interpreted. Function expressions are not hoisted, only declarations. Similarly only variable declarations are hoisted, but 
 * not their assignments (values). var variables have a default value of "undefined" when hoisted. let variables do not. 
 */

// 1: below we have an example of initializing the variable fruit--declaring it with let, and assigning it the string value
// of banana. 
let fruit = "banana";

// 2: 
var x = 20;
var x = 15;
console.log(x); //-> logs 15

let y = 20;
let y = 15;
console.log(y); //->Uncaught SyntaxError: Identifier "y" has already declared

// Here we see that attempting to reassign results in an error
const z = 199;
z = 11;
console.log(z); //->Uncaught TypeError: Assignment to constant Variable

// 3: hoisting--the following code demonstrates the the function declaration is lifted above its call (to the top of the global scope)
sayHello();

function sayHello(){
    console.log("Oh hello there.")
}