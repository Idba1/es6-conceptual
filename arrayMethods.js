/*  1. forEach, 
    2. map, 
    3. find, 
    4. filter, 
    5. reduce
 */


// forEach
const numbers = [10, 20, 30, 40, 50, 60, 70];
numbers.forEach(item => console.log(item+1));
/* const num = num.forEach(item => {
    return item+1;
});
console.log(num); */


// map
const num = numbers.map(item => item+1);
console.log(num);
console.log(numbers);