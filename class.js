class Animal {
    constructor(petName, petColor) {
        this.name = petName;
        this.color = petColor;
    }
    showOff(){
        console.log(`My pet name is ${this.name}. & color is ${this.color}`);
    }
}

const cat = new Animal("pikel","brown");
cat.showOff()