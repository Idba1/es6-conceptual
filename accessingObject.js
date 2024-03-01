const person = {
    name : "Idba",
    age : 20,
    contact : {
        phone : "00021211",
        email : "hello@idba.com"
    },
    education : {
        schoolName : "SNMAPMHS",
        subject : [
            {name: 'bangali', marks : 78},
            {name: 'english', marks : 78},
            {name: 'math', marks : 38},
        ]
    }
}

console.log(person.education.subject[2].marks)