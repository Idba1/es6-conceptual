/*
data type :
    1. primitive data type
    2. non-primitive data type 
*/

// primitive data type

const x = 5;
const y = true;
const str = "hello";

// non-primitive data type

const person = {
    name: "Mehedy",
}
const secondPerson = {...person};
secondPerson.age = 14;
console.log(person)