/*
Block scope
Function scope
Global scope
Nested function
*/

const globalScope = "This is global scope variable value";
const scopeVariable =
  "This is GLOBAL SCOPE variable value named the same as block and function scope variable";

// *** BLock scope ***

if (true) {
  const scopeVariable = "This is block scope variable value";
  console.log(scopeVariable); //This is block scope variable value
  console.log(globalScope); //This is global scope variable value
}
// console.log(blockScopeVariable) //ReferenceError: blockScopeVariable is not defined

// *** Function scope ***

const functionScope = () => {
  const scopeVariable = "This is function scope variable value";
  console.log(scopeVariable); //This is function scope variable value
  console.log(globalScope); //This is global scope variable value
};
functionScope();
// console.log(functionScopeVariable) //ReferenceError: functionScopeVariable is not defined

// *** Nested Function scope ***

const num1 = 100;
function outer() {
  const num2 = 200;
  function inside() {
    const num3 = 300;
    console.log(num1, num2, num3);
  }
  inside();
}
outer();
