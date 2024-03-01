const person = {
    name : "jani na",
    age : "bolbo na",
    phone : "sry it's personal",
    address : "bari nai",
    p: [1,2,3,4]
}

const person1 = {...person};
// const person1 = person;
person1.email = "hello@gmail.com";
console.log(person);
console.log(person1)