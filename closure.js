/*

*/

function out() {
    let counter = 0;

    function inside(params) {
        counter++;
        console.log(counter)
    };
    inside();
}
out();

out();