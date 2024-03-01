// spread
const numbers = [10, 20, 30, 40, 50, 60, 70];
const number = [];

for(let num of numbers){
    number.push(num);
}
console.log(number);

// es6
const number1 = [...numbers];
number1.push(90);
console.log(numbers)
console.log(number1);