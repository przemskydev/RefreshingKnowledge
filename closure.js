/*
Closure is created when function return another function. In line 15 we are returning inside() function from the out() function.
JavaScript return it as a scope with one variable called couter, together terms as a closure and will remember counter variable value.
Inside() function has access to the counter variable in the out() function scope even after the out() function has finished

*/

function out() {
  let counter = 0;

  function inside() {
    counter++;
    console.log(counter);
  }
  return inside;
}
let closureFunction = out();

closureFunction(); // 1
closureFunction(); // 2