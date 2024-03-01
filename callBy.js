/* 
    call by Reference => non-primitive
    call by value => primitive
*/

let x = 5;
let y = [1,2,3,4];


// non-primitive
const modify = (y) => {
    y.push(5);
    console.log(y);
}
modify(y);
console.log(y);



// primitive
const modify1 = (x) => {
    x = x+2;
    console.log(x);
}
modify1(x);
console.log(x);