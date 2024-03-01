class Owner {
    constructor(name,age){
        this.ownerName = name;
        this.ownerAge = age;
    }
    ownerInfo(){
        console.log(`ownerName: ${this.ownerName}. ownerAge ${this.ownerAge}.`)
    }
}

class Animal extends Owner{
    constructor(petName,petColor,wName,wAge){
        super(wName,wAge);
        this.name = petName;
        this.color = petColor;
    }
    showInfo(){
        console.log(`my pet name is ${this.name}. color is ${this.color}`)
    }
}

const cat = new Animal ("travis","white","mehedy",26);
cat.showInfo();
cat.ownerInfo();