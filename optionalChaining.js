const petOwner = {
    name: "Khalid Farhan",
    cotact: {
        phone: "0099888",
        email: "hello@khalidfarhan.com",
    },
    pet: {
        name: "Maklu",
        info: {
            color : "White",
            weight : "jani na "
        }
    }
}

// console.log(petOwner.pet.info.color.food.favourite);
console.log(petOwner.pet.info.color?.food?.favourite);