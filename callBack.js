function display (name,age){
    console.log(`hey i.m ${name}. i am ${age} years  old.`);
}

function fun1 (name,age,callBack){
    console.log(`Hello from fun1`);
    setTimeout(()=>{
        callBack(name,age);
    }, 2000);
}

fun1("Farhan", 30, display)