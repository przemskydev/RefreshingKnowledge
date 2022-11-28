/*
Block scope
Function scope
Global scope
Nested function
*/

// *** BLock scope ***

if (true) {
  const scopeVariable = "This is block scope variable value";
  console.log(scopeVariable); //This is block scope variable value
}
// console.log(blockScopeVariable) //ReferenceError: blockScopeVariable is not defined

// *** Function scope ***

const functionScope = () => {
  const scopeVariable = "This is function scope variable value";
  // console.log(scopeVariable) //This is function scope variable value
};
functionScope();
// console.log(functionScopeVariable) //ReferenceError: functionScopeVariable is not defined

// *** GLobal scope ***


