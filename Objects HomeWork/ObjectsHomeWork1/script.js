console.log('connected..')

// Redo this homework using Object.create()
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

let animal=new Animal("name",2,'latinName',4)
console.log(animal)



// Create AquaticAnimal constructor function that inherit from Animal and has:

// type
// liveInSaltWater boolean value
// liveInFreshWater boolean value
// changeLifeEnvironment method that expect type of the water that animal lives in. In case is "salt" it should change property liveInSaltWater value, same with liveInFreshWater in case the value of the type is "fresh"

let aquaticAnimal= Object.create(animal);
aquaticAnimal.typeOfWater='salt';
aquaticAnimal.liveInSaltWater=false;
aquaticAnimal.liveInFreshWater=false;
aquaticAnimal.changeLifeEnvironment=function(typeOfWater){
    
    if(typeOfWater==='salt'){
        this.typeOfWater='salt';
        this.liveInSaltWater=true;
        this.liveInFreshWater=false;
    }
    else if(typeOfWater==='fresh'){
        this.typeOfWater='fresh';
        this.liveInSaltWater=false;
        this.liveInFreshWater=true;
    }
    else{
        this.liveInSaltWater=false;
        this.liveInFreshWater=false;
    }   
}

console.log(aquaticAnimal)
aquaticAnimal.changeLifeEnvironment('fresh')
console.log(aquaticAnimal)




// Create FlyingAnimal constructor function that inherit from Animal and has:

// type
// favoriteFood
// currentPlace - current place where animal is located in
// flyOut - method that expect place and change current place property of the animal

let flyingAnimal=Object.create(animal);
flyingAnimal.type='bird';
flyingAnimal.favFood='favFood';
flyingAnimal.currentPlace='currentPlace';
flyingAnimal.flyOut=function(place){
flyingAnimal.currentPlace=place;
}

console.log(flyingAnimal)
flyingAnimal.flyOut('Skopje')
console.log(flyingAnimal)



// Create TerrestrialAnimal constructor function that inherit from the Animal and has:

// hasFur boolean value
// typeOfFur
// sound - method that log sound that the animal make

let terrestrialAnimal=Object.create(animal)

terrestrialAnimal.hasFur=true;
terrestrialAnimal.typeOfFur='natural';
terrestrialAnimal.sound=function(sounds){
    console.log(`${sounds} ${sounds} ${sounds}`)
}

console.log(terrestrialAnimal)
terrestrialAnimal.sound('ROAR')

// Create WildAnimal constructor function that inherit from the TerrestrialAnimal and has:

// typeOfFood
// favoriteFood

let wildAnimal=Object.create(terrestrialAnimal)
wildAnimal.typeOfFood='Specific Food';
wildAnimal.favFood='favorite Food'

console.log(wildAnimal)



// Create DomesticAnimal constructor function that inherit from the TerrestrialAnimal and has:

// name
// ownerName
// Create multiple object from each type of animals with different values

let domesticAnimal=Object.create(terrestrialAnimal)
domesticAnimal.name='Name of domestic Animal';
domesticAnimal.owner='Animal Owner';

console.log(domesticAnimal)


