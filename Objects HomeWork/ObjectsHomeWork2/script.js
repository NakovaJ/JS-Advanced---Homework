console.log('connected...')

// Homework Inheritance
// Animal Kingdom
// Create Animal constructor function that has:

// name
// age
// latinName of the animal
// numberOfLegs
// print method that need to print animal name their latin name next to it, age of the animal and number of legs

function Animal(name,age,latinName,legsNo){
    this.name=name;
    this.age=age;
    this.latinName=latinName;
    this.legsNo=legsNo;
    this.printAnimal=function(){
        console.log(`${this.name} or also known as ${this.latinName}, in latin, is ${this.age} years old and has ${this.legsNo} legs!`)
    }
}

let tiger=new Animal('Tiger',3,'Pantera tigris',4)
let rabbit= new Animal('Rabbit',1,'Oryctolagus cuniculus',4)

// console.log(tiger)
// console.log(rabbit.printAnimal())



// Create AquaticAnimal constructor function that inherit from Animal and has:

// type
// liveInSaltWater boolean value
// liveInFreshWater boolean value
// changeLifeEnvironment method that expect type of the water that animal lives in. In case is "salt" it should change property liveInSaltWater value, same with liveInFreshWater in case the value of the type is "fresh"

function AquaticAnimal(typeOfWater,name,age,latinName){

Object.setPrototypeOf(this,new Animal(name,age,latinName,'no'))

    this.typeOfWater=typeOfWater;
    this.liveInSaltWater=false;
    this.liveInFreshWater=false;
    this.changeLifeEnvironment=function(typeOfWater){
        if(typeOfWater==='salt'){
        this.liveInSaltWater=true;
        this.liveInFreshWater=false;
    }
    else if(typeOfWater==='fresh'){
        this.liveInSaltWater=false;
        this.liveInFreshWater=true;
    }
    else{
        this.liveInSaltWater=false;
        this.liveInFreshWater=false;
    }
        
    } 
}

let shark= new AquaticAnimal('salt','Shark',15,'Selachimorpha');
shark.changeLifeEnvironment('salt');
console.log(shark)

// Create FlyingAnimal constructor function that inherit from Animal and has:

// type
// favoriteFood
// currentPlace - current place where animal is located in
// flyOut - method that expect place and change current place property of the animal

function FlyingAnimal(type,food,currentPlace,name,age,latinName,legsNo){
    Object.setPrototypeOf(this,new Animal(name,age,latinName,legsNo))

    this.type=type;
    this.food=food;
    this.currentPlace=currentPlace;
    this.flyOut=(place)=>{
        this.currentPlace=place;
    }
}

let eagle=new FlyingAnimal('bird','meat','mountain','Eagle',3,'Aquila',2)
eagle.flyOut('SkopjeZoo')
console.log(eagle)


// Create TerrestrialAnimal constructor function that inherit from the Animal and has:

// hasFur boolean value
// typeOfFur
// sound - method that log sound that the animal make

function TerrestrialAnimal(hasFur,typeOfFur,sound,name,age,latinName,legsNo){

    Object.setPrototypeOf(this,new Animal(name,age,latinName,legsNo))

    this.hasFur=hasFur;
    this.typeOfFur=typeOfFur;
    this.sound=()=>console.log(`${sound} ${sound} ${sound}`)
}

let cat=new TerrestrialAnimal(true,'white','MEOW',"Cat",4,'Felis catus',4);
console.log(cat)
console.log(cat.sound())
console.log(cat.printAnimal())



// Create WildAnimal constructor function that inherit from the TerrestrialAnimal and has:

// typeOfFood
// favoriteFood

function WildAnimal(typeOfFood,favoriteFood, hasFur,typeOfFur,sound,name,age,latinName,legsNo){
    Object.setPrototypeOf(this,new TerrestrialAnimal(hasFur,typeOfFur,sound,name,age,latinName,legsNo))
    this.typeOfFood=typeOfFood;
    this.favoriteFood=favoriteFood;
}

let elephant=new WildAnimal('grass','leaves',true,'grey','ROAR','Elephant',20,'Loxodonta',4)

console.log(elephant)
console.log(elephant.sound())
console.log(elephant.printAnimal())




// Create DomesticAnimal constructor function that inherit from the TerrestrialAnimal and has:

// name
// ownerName
// Create multiple object from each type of animals with different values

function DomesticAnimal(ownerName,typeOfFur,sound,name,age,latinName,legsNo){
    Object.setPrototypeOf(this,new TerrestrialAnimal(true,typeOfFur,sound,name,age,latinName,legsNo))

    this.ownerName=ownerName;
}

let lamb=new DomesticAnimal('Jelena','white','MEEH','Lamb',1,'Ovis aries',4)
console.log(lamb)
console.log(lamb.sound())
