console.log('connected...')

// Previous homework about inheritance refactor it (in a separate homework) with classes.



// Animal Kingdom
// Create Animal constructor function that has:

// name
// age
// latinName of the animal
// numberOfLegs
// print method that need to print animal name their latin name next to it, age of the animal and number of legs

class Animal{
    constructor(name,age,latinName,legsNo){
        this.name=name;
        this.age=age;
        this.latinName=latinName;
        this.legsNo=legsNo;
    }
    printAnimal(){
        console.log(`This ${this.name} or so called ${this.latinName} in Latin, is ${this.age} years old and has ${this.legsNo} legs`)
    }
}

let elephant= new Animal('Elephant',23,'Loxodonta',4)
console.log(elephant)
console.log(elephant.printAnimal())

// Create AquaticAnimal constructor function that inherit from Animal and has:

// type
// liveInSaltWater boolean value
// liveInFreshWater boolean value
// changeLifeEnvironment method that expect type of the water that animal lives in. In case is "salt" it should change property liveInSaltWater value, same with liveInFreshWater in case the value of the type is "fresh"
// make get/set for liveInSaltWater in AquaticAnimal

class AquaticAnimal extends Animal{
    constructor(name,age,latinName,legsNo,typeOfWater,liveInSaltWater,liveInFreshWater){
        super(name,age,latinName,legsNo);
        this.typeOfWater=typeOfWater;
        this.liveInSaltWater=liveInSaltWater;
        this.liveInFreshWater=liveInFreshWater;
    }
    get liveInSaltWater(){
        console.log('Searching for info to get the value if this animal lives in salt water...')
       return 'The value of this parameter is '+ this._liveInSaltWater;
            
        }
    
    set liveInSaltWater(value){
        console.log('Searching for info to properly set this value')
        value ===true ? this._liveInSaltWater = true : (()=> {throw new Error("Does not live in salt water!!")})();
    }
    // changeLifeEnvironment(){
    //     if(this.typeOfWater==='salt'){
    //         this.liveInSaltWater=true;
    //     }
    //     else if( this.typeOfWater==='fresh'){
    //         this.liveInFreshWater=true;
    //     }
    // }
}

let fish=new AquaticAnimal('FIsh',2,'Piscis','no','salt',true,false)
console.log(fish.liveInSaltWater)

// Create FlyingAnimal constructor function that inherit from Animal and has:

// type
// favoriteFood
// currentPlace - current place where animal is located in
// flyOut - method that expect place and change current place property of the animal

class FlyingAnimal extends Animal{
    constructor(name,age,latinName,legsNo,type,favFood,currentPlace){
        super(name,age,latinName,legsNo)
        this.type=type;
        this.favFood=favFood;
        this.currentPlace=currentPlace;
    }
    flyOut(place){
        this.currentPlace=place;
    }
}

let stork=new FlyingAnimal('Stork',4,'Ciconiidae',2,'long-legged','frogs','Africa')
console.log(stork)
stork.flyOut('Skopje')
console.log(stork)

// Create TerrestrialAnimal constructor function that inherit from the Animal and has:

// hasFur boolean value
// typeOfFur
// sound - method that log sound that the animal make
// make get/set for typeOfFur in TerrestrialAnimal

class TerrestrialAnimal extends Animal{
    constructor(name,age,latinName,legsNo,hasFur,typeOfFur){
        super(name,age,latinName,legsNo)
        this.hasFur=hasFur;
        this.typeOfFur=typeOfFur;
    }
    set typeOfFur(value){
    
        console.log('Currently setting the type of fur...')
        if(value==='natural'){
            this._typeOfFur=value
        }
        else{
            (()=>{throw new Error('No Animal can have faux fur')})()
        }
    }
    get typeOfFur(){
        console.log('Currently getting the type of fur...')
        return `The type of fur is ${this._typeOfFur}`

    }
    sound(specificSound){
        console.log(`${specificSound} ${specificSound}`)
    }
}

let cangaroo= new TerrestrialAnimal('Kangaroo',25,'Macropodidae',5,true,'natural')
console.log(cangaroo.typeOfFur)


// Create WildAnimal constructor function that inherit from the TerrestrialAnimal and has:

// typeOfFood
// favoriteFood
// make get/set for typeOfFood in WildAnimal

class WildAnimal extends TerrestrialAnimal{
    constructor(name,age,latinName,legsNo,hasFur,typeOfFur,typeOfFood,favoriteFood){
       super(name,age,latinName,legsNo,hasFur,typeOfFur)
       this.typeOfFood=typeOfFood;
       this.favoriteFood=favoriteFood;
    }
    set typeOfFood(food){
        console.log('setting the type of food...')
        if(food='foodForWildAnimals'){
            this._typeOfFood=food;
        }
        else{
           (()=>{ throw new Error('This is now proper food for wild animals')})()
        }
    }
    get typeOfFood(){
        console.log('getting the type of food...')
        return `The type of food is ${this._typeOfFood}`
    }
}

let giraffe= new WildAnimal('Giraffe',40,'Giraffa',4,true,'natural','foodForWildAnimals','leaves')
console.log(giraffe)
console.log(giraffe.typeOfFood)

// Create DomesticAnimal constructor function that inherit from the TerrestrialAnimal and has:

// name
// ownerName
// Create multiple object from each type of animals with different values
// add new properties in DomesticAnimal...The first one is hasOwner boolean value and price. In addtition add static ownerPrice method that in case any animal has owner should add addtional 1000 to it's price value

class DomesticAnimal extends TerrestrialAnimal{
    constructor(name,age,latinName,legsNo,hasFur,typeOfFur,hasOwner,price){
        super(name,age,latinName,legsNo,hasFur,typeOfFur)

        this.hasOwner=hasOwner;
        this.price=price;
    }

        static ownerPrice(domesticAnimal){
         if(domesticAnimal.hasOwner===true){
             domesticAnimal.price+=100;
             console.log(`${domesticAnimal.name} will be ${domesticAnimal.price} Euros, because it has an owner!`)
         }
         else{
             console.log(`The price of this ${domesticAnimal.name} is ${domesticAnimal.price}!`)
         }
        }
    }

    let dog= new DomesticAnimal('Dog',8,'Canis lupus',4,true,'natural',false,1000)
    DomesticAnimal.ownerPrice(dog)
    