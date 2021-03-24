console.log("yup working...");

const btnLogin1 = document.getElementById("btnLogin1");
const btnLogin2 = document.getElementById("btnLogin2");
const btnLogin3 = document.getElementById("btnLogin3");
const loginForm = document.getElementsByClassName("login");
const intro = document.getElementById("intro");
const register = document.getElementsByClassName("register")[0];
const inputNameLogin = document.getElementById("inputName");
const inputPasswordLogin = document.getElementById("inputPasword");
const btnRegister1 = document.getElementById("btnRegister1");
const btnRegister2 = document.getElementById("btnRegister2");
const paragraph1 = document.getElementById("p1");
const paragraph2 = document.getElementById("p2");
const paragraph3 = document.getElementById("p3");
const paragraph4 = document.getElementById("p4");
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let usernameInput = document.getElementById("username");
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");
let registerLoginHeading = document.getElementById("registerLogin");
let logoutBtn = document.getElementById("logout");
let loginHeading = document.getElementById("loginHeading");
let cartDisplay=document.getElementById('cart');
// let cartDetailedDisplay=document.getElementById('cartDetailedDisplay')

function total(array){
  let totalSum=0;
  for(item of array){
totalSum+=item.noOfItems*item.price;
  }
  return totalSum;
}
function addToCart(array){

  cartDisplay.innerHTML='';
  cartDisplay.innerHTML+=`<h5>Your shopping cart  &#x1F6D2:</h5>`;
  cartDisplay.innerHTML+=`<table><tr><th>Item</th><th>no</th><th>Price</th><th>Farm</th></tr></table>`
 
  for (product of array){
    cartDisplay.innerHTML+=`<div>${product.noOfItems} ${product.item}  ${product.price}&#8364 ${product.location}</div>`;

  }
  cartDisplay.innerHTML+=`<hr>`;
  cartDisplay.innerHTML+=`<div>TOTAL &#8364:${total(array)}</div> `;
  cartDisplay.innerHTML+=`<button id='pay'>Pay Now!</button>`
  
}




let allAnimalsForSale=[];
let shoppingCart=[];
let someoneLoggedIn = false;
let admin = {
  username: "admin",
  password: "admin",
  name: "NameOfAdmin",
  lastName: "second name",
  isAdmin: true,
};
class BoughtItem{
  constructor(item,maxItems,noOfItems,price,location){
    this.item=item;
    this.maxItems=maxItems;
    this.noOfItems=noOfItems;
    this.price=price;
    this.location=location;
  }
}


class User {
  constructor(username, password, name, lastName) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.isAdmin = false;
  }
}
let users = [admin];

function loginChecker(username, password) {
  for (user of users) {
    if (user.username === username && user.password === password) {
      loginForm[0].style.display = "none";
      btnLogin1.style.display = "none";
      btnRegister1.style.display = "none";
      headerParagraph.style.display = "block";
      headerParagraph.innerText = "";
      headerParagraph.innerText += ` ${user.name}'s Profile`;
      logout.style.display = "block";
    }
  }
  if (user.username !== username || user.password !== password) {
    loginHeading.innerText += "*Username or Password incorrect! ";
  }
}

function registerChecker(
  firstName,
  lastName,
  username,
  passwordFirst,
  passwordSecond
) {
  paragraph1.innerText = "";
  paragraph2.innerText = "";
  paragraph3.innerText = "";
  paragraph4.innerText = "";

  if (firstName.length < 3 || firstName.length > 10) {
    paragraph1.innerText +=
      "*Name is too short/long, it has to be at least 4 characters and not more than 10 characters!";
  }

  if (lastName.length < 4 || lastName.length > 10) {
    paragraph2.innerText +=
      "*Last name is too short/long, it has to be at least 4 characters and not more than 10 characters!";
  }
  if (username.length < 5 || username.length > 10) {
    paragraph3.innerText +=
      "*Username is too short/long, it has to be at least 5 characters and not more than 10 characters!";
  }
  if (passwordFirst.length < 5 || passwordFirst.length > 10) {
    paragraph4.innerText +=
      "*Password is too short/long, it has to be at least 5 characters and not more than 10 characters!";
  }
  var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;

  if (!passwordFirst.match(regEx)) {
    paragraph4.innerText +=
      "*Password should contain at least Uppercase letter,one lowercase letter,one number and one special character!";
  }
  if (passwordFirst !== passwordSecond) {
    paragraph4.innerText += "Inserted passwords do not match!";
  }
  if (
    ((paragraph1.innerText == paragraph2.innerText) == paragraph3.innerText) ==
    paragraph4.innerText
  ) {
    users.push(new User(username, passwordFirst, firstName, lastName));
    register.style.display = "none";
    loginForm[0].style.display = "block";
    registerLoginHeading.style.display = "block";
  }
}

btnLogin1.addEventListener("click", () => {
  loginHeading.innerText = "";

  intro.style.display = "none";
  register.style.display = "none";
  loginForm[0].style.display = "block";
});
btnLogin3.addEventListener("click", () => {
  loginChecker(inputNameLogin.value, inputPasswordLogin.value);
  someoneLoggedIn = true;
  display.innerHTML='';
  display.innerHTML+='<h3>Welcome to the best farm offers! Check out todays listings ! <h3><h3><------!</h3><h3><------!</h3><h3><------!</h3><h3><------!</h3>';
  cartDisplay.innerHTML='';
  cartDisplay.innerHTML+=`<h5>Your shopping cart  &#x1F6D2:</h5>`
  cartDisplay.innerHTML+=`<h6>is currently empty!</h6>`;
  cart.style.display='block';


});


btnLogin2.addEventListener("click", () => {
  loginHeading.innerText = "";

  intro.style.display = "none";
  register.style.display = "none";

  loginForm[0].style.display = "block";
});
btnRegister1.addEventListener("click", () => {
  intro.style.display = "none";
  loginForm[0].style.display = "none";
  register.style.display = "block";
});
btnRegister2.addEventListener("click", () => {
  intro.style.display = "none";
  loginForm[0].style.display = "none";
  register.style.display = "block";
});
btnRegister3.addEventListener("click", () => {
  registerChecker(
    firstName.value,
    lastName.value,
    username.value,
    passwordOne.value,
    passwordTwo.value
  );
});
logoutBtn.addEventListener("click", () => {
  intro.style.display = "none";
  loginForm[0].style.display = "none";
  register.style.display = "none";
  headerParagraph.style.display = "none";
  logout.style.display = "none";
  btnLogin1.style.display = "inline";
  btnRegister1.style.display = "inline";
  someoneLoggedIn = false;
  cartDisplay.style.display='none';
  display.innerHTML='';
  display.innerHTML+='<h3>Thank You!</h3><h3>We are always here to give you the best farm offers!</h3><h3> Visit us again ! </h3>'
});

class Farm {
  constructor(
    farmAnimals,
    farmEquipment,
    farmGrains,
    location,
    totalBudget,
    about,
    image
  ) {
    this.farmAnimals = farmAnimals;
    this.farmEquipment = farmEquipment;
    this.farmGrains = farmGrains;
    this.location = location;
    this.totalBudget = totalBudget;
    this.about = about;
    this.image = image;
  }
}

class Animals {
  constructor(typeOfAnimal, noOfAnimals, animalsForSale, price, budget,location,img) {
    this.typeOfAnimal = typeOfAnimal;
    this.noOfAnimals = noOfAnimals;
    this.animalsForSale = animalsForSale;
    this.price = price;
    this.budget = budget;
    this.location=location;
    this.img=img;
  }
  sellAnimal(noOfAnimalsSold) {
    this.noOfAnimals = this.noOfAnimals - noOfAnimalsSold;
    this.animalsForSale = this.animalsForSale - noOfAnimalsSold;
    this.budget += noOfAnimalsSold * this.price;
  }
  buyAnimal(noOfAnimalsBought, externalPrice) {
    this.noOfAnimal += noOfAnimalsBought;
    this.budget -= noOfAnimalsBought * externalPrice;
  }
}
class UngulateAnimals extends Animals {
  constructor(
    typeOfAnimal,
    noOfAnimals,
    animalsForSale,
    price,
    budget,
    milkPerAnimal,
    milkPrice,
    location,
    img
  ) {
    super(typeOfAnimal, noOfAnimals, animalsForSale, price, budget,location,img);
    this.milkPerAnimal = milkPerAnimal;
    this.milkPrice = milkPrice;
  }
  totalMilkProduced() {
    return this.noOfAnimals * this.milkPerAnimal;
  }
  sellMilk(litersOfMilk) {
    if (this.totalMilkProduced() >= litersOfMilk) {
      this.budget += litersOfMilk * this.milkPrice;
    }
  }
}

class BirdAnimals extends Animals {
  constructor(
    typeOfAnimal,
    noOfAnimals,
    animalsForSale,
    price,
    budget,
    noOfEggs,
    eggPrice,
    location,
    img
  ) {
    super(typeOfAnimal, noOfAnimals, animalsForSale, price, budget,location,img);
    this.noOfEggs = noOfEggs;
    this.eggPrice = eggPrice;
    this.location=location;
    this.img=img;
  }
  totalEggsProduced() {
    return this.noOfAnimals * this.noOfEggs;
  }
  sellEggs(numberOfEggsBuyerWants) {
    if (this.totalEggsProduced() >= numberOfEggsBuyerWants) {
      this.budget += numberOfEggsBuyerWants * this.eggPrice;
    }
  }
}

class Equipment {
  constructor(
    typeOfEquipment,
    noOfEquipment,
    fuelConsumption,
    yearOfProduction,
    firstOwner,
    price,
    budgetEquipment,
    location,
    img
  ) {
    this.typeOfEquipment = typeOfEquipment;
    this.noOfEquipment = noOfEquipment;
    this.fuelConsumption = fuelConsumption;
    this.yearOfProduction = yearOfProduction;
    this.firstOwner = firstOwner;
    this.price = price;
    this.budgetEquipment = budgetEquipment;
    this.location=location;
    this.img=img;
  }
  addValue() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    if (currentYear - this.yearOfProduction < 5) {
      this.price += 500;
    }
    if (this.firstOwner === true) {
      this.price += 400;
    }
  }
  sellEquipment() {
    if (this.noOfEquipment > 0) {
      this.addValue();
      this.budgetEquipment += this.price;
      this.noOfEquipment -= 1;
    }
  }
}

class PlantProducts {
  constructor(typeOfPlant, quantity, price, budgetGrains,location,img) {
    this.typeOfPlant = typeOfPlant;
    this.quantity = quantity;
    this.price = price;
    this.budgetGrains = budgetGrains;
    this.location=location;
    this.img=img;
  }
  sellPlantProducts(quantityRequested) {
    if (this.quantity >= quantityRequested) {
      this.quantity -= quantityRequested;
      this.budgetGrains += quantityRequested * this.price;
    }
  }
}

var skopjeFarm = new Farm(
  [
    new UngulateAnimals("COWS", 30, 14, 1200, 0, 8, 0.3,'SKOPJE','Photos/farm1.jpg'),
    new UngulateAnimals("SHIPS", 15, 12, 500, 0, 4, 0.7,'SKOPJE','Photos/farm1.jpg'),
    new UngulateAnimals("GOATS", 5, 1, 300, 200, 3, 0.4,'SKOPJE','Photos/farm1.jpg'),
    new BirdAnimals("CHICKENS", 46, 23,0.20, 0, 64, 0.2,'SKOPJE','Photos/farm1.jpg'),
    new Animals("DOGS", 3, 2, 700, 0,'SKOPJE','Photos/farm1.jpg'),
    new Animals("CATS", 6, 6, 15, 0,'SKOPJE','Photos/farm1.jpg'),
  ],
  [
    new Equipment("CARS", 3, 12, 2012, true, 3000, 0,'SKOPJE','Photos/farm1.jpg'),
    new Equipment("TRACTORS", 1, 8, 2018, true, 5000, 0,'SKOPJE','Photos/farm1.jpg'),
    new Equipment("VANS", 1, 14, 2015, false, 4500, 0,'SKOPJE','Photos/farm1.jpg'),
  ],
  [
    new PlantProducts("WHEAT", 3000, 1, 0,'SKOPJE','Photos/farm1.jpg'),
    new PlantProducts("CORN", 2000, 0.5, 0,'SKOPJE','Photos/farm1.jpg'),
    new PlantProducts("POTATOES", 300, 1, 0,'SKOPJE','Photos/farm1.jpg'),
    new PlantProducts("CARROTS", 90, 1.5, 0,'SKOPJE','Photos/farm1.jpg'),
    new PlantProducts("APPLES", 340, 2, 0,'SKOPJE','Photos/farm1.jpg'),
  ],
  "SKOPJE",
  0,
  "Skopje Farm is a well known farm for its constant dedication towards quality and preserving the nature...",
  "Photos/farm1.jpg"
);

var mavrovoFarm = new Farm(
  [
    new UngulateAnimals("COWS", 100, 31, 1500, 0, 8, 0.5,'MAVROVO','Photos/farm2.jpg'),
    new UngulateAnimals("SHIPS", 155, 62, 600, 0, 5, 0.8,'MAVROVO','Photos/farm2.jpg'),
    new BirdAnimals("CHICKENS", 123, 32, 0.25, 0, 64, 0.3,'MAVROVO','Photos/farm2.jpg'),
    new Animals("DOGS", 5, 1, 700, 0,'MAVROVO','Photos/farm2.jpg'),
    new Animals("CATS", 3, 1, 15, 0,'MAVROVO','Photos/farm2.jpg'),
    new Animals("RABBITS", 54, 23, 15, 0,'MAVROVO','Photos/farm2.jpg'),
  ],
  [
    // new Equipment("CARS", 1, 12, 2012, true, 3000, 0,'MAVROVO','Photos/farm2.jpg'),
    // new Equipment("TRACTORS", 1, 8, 2018, true, 5000, 0,'MAVROVO','Photos/farm2.jpg'),
  ],
  [
    new PlantProducts("WHEAT", 500, 1, 0,'MAVROVO','Photos/farm2.jpg'),
    new PlantProducts("CORN", 8000, 0.5, 0,'MAVROVO','Photos/farm2.jpg'),
    new PlantProducts("POTATOES", 3300, 0.9, 0,'MAVROVO','Photos/farm2.jpg'),
    new PlantProducts("CARROTS", 45, 1.3, 0,'MAVROVO','Photos/farm2.jpg'),
    new PlantProducts("APPLES", 1300, 1.2, 0,'MAVROVO','Photos/farm2.jpg'),
  ],
  "MAVROVO",
  0,
  "Mavrovo Farm, placed deep in the fresh and unpolluted mountains can offer the best quality of a product a farm can provide! Fully organic and healthy...",
  "Photos/farm2.jpg"
);

var bitolaFarm = new Farm(
  [
    new UngulateAnimals("COWS", 30, 14, 1200, 0, 8, 0.3,'BITOLA','Photos/farm3.jpg'),
    new UngulateAnimals("SHIPS", 79, 47, 500, 0, 4, 0.7,'BITOLA','Photos/farm3.jpg'),
    new UngulateAnimals("GOATS", 45, 1, 300, 200, 3, 0.4,'BITOLA','Photos/farm3.jpg'),
    new BirdAnimals("CHICKENS", 164, 39, 0.20, 0, 64, 0.2,'BITOLA','Photos/farm3.jpg'),
    new Animals("DOGS", 10, 4, 700, 0,'BITOLA','Photos/farm3.jpg'),
    new Animals("CATS", 20, 15, 15, 0,'BITOLA','Photos/farm3.jpg'),
  ],
  [
    new Equipment("CARS", 1, 12, 2012, true, 3000, 0,'BITOLA','Photos/farm3.jpg'),
    new Equipment("TRACTORS", 2, 8, 2018, true, 5000, 0,'BITOLA','Photos/farm3.jpg'),
    new Equipment("VANS", 1, 14, 2015, false, 4500, 0,'BITOLA','Photos/farm3.jpg'),
    new Equipment("TRUCKS", 1, 30, 2010, true, 30000, 0,'BITOLA','Photos/farm3.jpg'),
  ],
  [
    // new PlantProducts("WHEAT", 3000, 1, 0,'BITOLA','Photos/farm3.jpg'),
    // new PlantProducts("CORN", 2000, 0.5, 0,'BITOLA','Photos/farm3.jpg'),
    // new PlantProducts("POTATOES", 300, 1, 0,'BITOLA','Photos/farm3.jpg'),
    // new PlantProducts("CARROTS", 90, 1.5, 0,'BITOLA','Photos/farm3.jpg'),
    // new PlantProducts("APPLES", 340, 2, 0,'BITOLA','Photos/farm3.jpg'),
  ],
  "BITOLA",
  0,
  "Bitola Farm is the biggest farm in the west part of the Country a well known farm for its constant dedication towards quality while maintaining the quantity of production high and preserving the nature...",
  "Photos/farm3.jpg"
);
var kumanovoFarm = new Farm(
  [
    new UngulateAnimals("SHIPS", 10, 3, 550, 0, 4, 0.8,'KUMANOVO','Photos/farm4.jpg'),
    new UngulateAnimals("GOATS", 15, 2, 300, 230, 3, 0.5,'KUMANOVO','Photos/farm4.jpg'),
    new BirdAnimals("CHICKENS", 48, 13, 0.20, 0, 63, 0.3,'KUMANOVO','Photos/farm4.jpg'),
    new Animals("DOGS", 1, 1, 700, 0,'KUMANOVO','Photos/farm4.jpg'),
    new Animals("CATS", 3, 3, 15, 0,'KUMANOVO','Photos/farm4.jpg'),
  ],
  [
    new Equipment("CARS", 4, 12, 2012, true, 3000, 0,'KUMANOVO','Photos/farm4.jpg'),
    new Equipment("TRACTORS", 1, 8, 2018, true, 5000, 0,'KUMANOVO','Photos/farm4.jpg'),
  ],
  [
    new PlantProducts("QUINOA", 3000, 1, 0,'KUMANOVO','Photos/farm4.jpg'),
    new PlantProducts("CORN", 2000, 0.5, 0,'KUMANOVO','Photos/farm4.jpg'),
    new PlantProducts("TOMATOES", 300, 1, 0,'KUMANOVO','Photos/farm4.jpg'),
    new PlantProducts("PEPPERS", 90, 1.5, 0,'KUMANOVO','Photos/farm4.jpg'),
    new PlantProducts("APPLES", 54, 2, 0,'KUMANOVO','Photos/farm4.jpg'),
    new PlantProducts("PERAS", 34, 5, 0,'KUMANOVO','Photos/farm4.jpg'),
  ],
  "KUMANOVO",
  0,
  "Kumanovo Farm brings the best out of nature...",
  "Photos/farm4.jpg"
);

var kochaniFarm = new Farm(
  [
    // new UngulateAnimals("SHIPS", 10, 3, 550, 0, 4, 0.8,'KOCHANI','Photos/farm5.jpg'),
    // new UngulateAnimals("GOATS", 15, 2, 300, 230, 3, 0.5,'KOCHANI','Photos/farm5.jpg'),
    // new BirdAnimals("CHICKENS", 48, 13, 20, 0, 63, 0.3,'KOCHANI','Photos/farm5.jpg'),
    // new Animals("DOG", 1, 1, 700, 0,'KOCHANI','Photos/farm5.jpg'),
    // new Animals("CATS", 3, 3, 0.15, 0,'KOCHANI','Photos/farm5.jpg'),
  ],
  [
    new Equipment("CARS", 4, 12, 2012, true, 3000, 0,'KOCHANI','Photos/farm5.jpg'),
    new Equipment("TRACTORS", 1, 8, 2018, true, 5000, 0,'KOCHANI','Photos/farm5.jpg'),
  ],
  [
    new PlantProducts("RICE", 3000, 1, 0,'KOCHANI','Photos/farm5.jpg'),
    new PlantProducts("WHEAT", 2000, 0.5, 0,'KOCHANI','Photos/farm5.jpg'),
    new PlantProducts("PEPPERS", 90, 1.5, 0,'KOCHANI','Photos/farm5.jpg'),
    new PlantProducts("APPLES", 54, 2, 0,'KOCHANI','Photos/farm5.jpg'),
    new PlantProducts("PEARS", 34, 5, 0,'KOCHANI','Photos/farm5.jpg'),
  ],
  "KOCHANI",
  0,
  "Kochani Farm ... nature never tasted so good!",
  "Photos/farm5.jpg"
);
let allFarms = [skopjeFarm, mavrovoFarm, bitolaFarm, kumanovoFarm, kochaniFarm];
const btnFarms = document.getElementById("farms");
const btnAnimals = document.getElementById("animals");
const btnEquipment = document.getElementById("equipment");
const btnGrainsProduced = document.getElementById("grainsProduced");
const btnAnimalProducts = document.getElementById("animalProducts");
const display = document.getElementById("display");

function displayFarm(array) {
  display.innerHTML = "";
  display.innerHTML = `<h3>ALL FARMS LISTING FOOD, ANIMALS AND FARM EQUIPMENT FOR SALE:</h3><div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        Sort Farms By
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><button class="dropdown-item" type="button" id='sortFarmsByName'>Name</button></li>
      </ul><div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        Filter Farms 
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li><button class="dropdown-item" type="button" id='filterFarmsAnimals'> listing animals for sale</li>
      <li><button class="dropdown-item" type="button" id='filterFarmsEquipment'> selling farm equipment</li>
      <li><button class="dropdown-item" type="button" id='filterFarmsPlants'> producing plant products</button></li>
        <li><button class="dropdown-item" type="button" id='filterFarmsAnimalProducts'> producing animal products</button></li>
        
       
       
      </ul>`;

  for (farm of array) {
    display.innerHTML += `<div class="row" >
        <div class="col-md-2"><img src=${farm.image} width=100px></div>
        <div class="col-md-1" ></div>
        <div class="col-md-3"><b>${farm.location} FARM</b></div>
  
        <div class="col-md-6"><div class="row">${farm.about}</div>
        <div class="row"><ul>Offering: <li>Food</li><li>Farm animals</li><li>Farm equipment</li></ul></div></div>
     

      </div>`;
  }
  
  let sortFarmsByName = document.getElementById("sortFarmsByName");
  let filterFarmsPlants = document.getElementById("filterFarmsPlants");
  let filterFarmsAnimals = document.getElementById("filterFarmsAnimals");
  let filterFarmsEquipment = document.getElementById("filterFarmsEquipment");
  let filterFarmsAnimalProducts = document.getElementById("filterFarmsAnimalProducts");

  

  sortFarmsByName.addEventListener("click", () => {
    allFarms.sort((farmOne, farmTwo) =>
      farmOne.location.localeCompare(farmTwo.location)
    );
     displayFarm(allFarms)
  });
  
  filterFarmsPlants.addEventListener('click',()=>{
     let sortedFarms=allFarms.filter(farm=>farm.farmGrains.length !==0);
      displayFarm(sortedFarms) 
  })

  filterFarmsAnimals.addEventListener('click',()=>{
    let sortedFarms=allFarms.filter(farm=>farm.farmAnimals.length !==0);
     displayFarm(sortedFarms) 
 })
 filterFarmsEquipment.addEventListener('click',()=>{
    let sortedFarms=allFarms.filter(farm=>farm.farmEquipment.length !==0);
     displayFarm(sortedFarms) 
 })
 filterFarmsAnimalProducts.addEventListener('click',()=>{
    let filteredAnimalProduct=[];
    for(farm of array) {
       for(element of farm.farmAnimals){
           if (element instanceof(UngulateAnimals||BirdAnimals)){
               if(filteredAnimalProduct.includes(farm)){

               }
               else{
                filteredAnimalProduct.push(farm)

               }
           }
       }
    }
   
 
    displayFarm(filteredAnimalProduct) 
    console.log(filteredAnimalProduct)
})

 }

btnFarms.addEventListener("click", () => {
  if(someoneLoggedIn===true){
  displayFarm(allFarms);
    }
});

function displayAnimals(array){
    display.innerHTML = "";
    display.innerHTML = `<h3>ALL FARM ANIMALS FOR SALE:</h3><div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          Sort Animals for sale by
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><button class="dropdown-item" type="button" id='sortAnimalsByName'>Name</button></li>
          <li><button class="dropdown-item" type="button" id='sortAnimalsByPriceUp'>Price(raising)</button></li>
          <li><button class="dropdown-item" type="button" id='sortAnimalsByPriceDown'>Price(decreasing)</button></li>


        </ul><div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          Show only
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><button class="dropdown-item" type="button" id='filterCows'>Cows for sale </li>
        <li><button class="dropdown-item" type="button" id='filterShips'>Ships for sale</li>
        <li><button class="dropdown-item" type="button" id='filterGoats'>Goats for sale</button></li>
        <li><button class="dropdown-item" type="button" id='filterChickens'>Chickens for sale</button></li>
        <li><button class="dropdown-item" type="button" id='filterDogs'>Dogs for sale</button></li>
        <li><button class="dropdown-item" type="button" id='filterCats'>Cats for sale</button></li>
        <li><button class="dropdown-item" type="button" id='filterRabbits'>Rabbits for sale</button></li> 
         
        </ul>`;

  
    for (eachAnimal of array) {
      display.innerHTML += `<div class="row" >
              <div class="col-md-2"><img src=${eachAnimal.img} width=100px></div>
              <div class="col-md-1" ></div>
              <div class="col-md-2"><div>${eachAnimal.location}</div><div> FARM</div></div>
        
              <div class="col-md-3">selling <b><div>${eachAnimal.animalsForSale}</div><div> ${eachAnimal.typeOfAnimal}</div></b></div>
              <div class="col-md-2"><div>Price per animal in &#8364:</div><div>${eachAnimal.price} </div></div>
              <div class="col-md-2" ><button class='buy'>Add to cart!</button></div>


            </div>`;
    }

  let buyButtons=document.querySelectorAll('.buy') 
buyButtons.forEach(element => {
    element.addEventListener('click',()=>{
      let farmLocation=element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerText;
      
      let itemClicked=element.parentElement.previousElementSibling.previousElementSibling.lastElementChild.lastElementChild.innerText;
 
      let maximumItemsClicked=element.parentElement.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild.innerText;
    
      

      let priceOfItemClicked=element.parentElement.previousElementSibling.lastElementChild.innerText

       function cartChecker(array){
      
        let existingObject=false;
        for(thing of array){
          if(thing.item===itemClicked&&thing.location===farmLocation){
            if(thing.maxItems > thing.noOfItems){
              thing.noOfItems+=1;
            }
            existingObject=true;
            
          }
               
        } 
         if(array.length===0){
          shoppingCart.push(new BoughtItem(itemClicked,maximumItemsClicked,1,priceOfItemClicked,farmLocation))

         }
         else{
          if(existingObject===false){
            shoppingCart.push(new BoughtItem(itemClicked,maximumItemsClicked,1,priceOfItemClicked,farmLocation))
          }
        }
         
       }
       cartChecker(shoppingCart)
      addToCart(shoppingCart)
      console.log(shoppingCart)
      
    })
  }); 
  let sortAnimalsByName = document.getElementById("sortAnimalsByName");
  let sortAnimalsByPriceUp=document.getElementById('sortAnimalsByPriceUp');
  let sortAnimalsByPriceDown=document.getElementById('sortAnimalsByPriceDown');
  let filterCows=document.getElementById('filterCows');
  let filterShips=document.getElementById('filterShips');
  let filterGoats=document.getElementById('filterGoats');
  let filterChickens=document.getElementById('filterChickens');
  let filterDogs=document.getElementById('filterDogs');
  let filterCats=document.getElementById('filterCats');
  let filterRabbits=document.getElementById('filterRabbits')

  sortAnimalsByName.addEventListener("click", () => {
    allAnimals.sort((animalOne, animalTwo) =>
      animalOne.typeOfAnimal.localeCompare(animalTwo.typeOfAnimal)
    );
    displayAnimals(allAnimals);
  });

  sortAnimalsByPriceUp.addEventListener('click',()=>{
    allAnimals.sort((animalOne, animalTwo) =>
    animalOne.price-animalTwo.price)
  
  displayAnimals(allAnimals);
  })

  sortAnimalsByPriceDown.addEventListener('click',()=>{
    allAnimals.sort((animalOne, animalTwo) =>
    animalTwo.price-animalOne.price)
  
  displayAnimals(allAnimals);
  })

  filterCows.addEventListener('click',()=>{
     let filteredCows=allAnimals.filter(animalOne=>animalOne.typeOfAnimal==='COWS');
     displayAnimals(filteredCows)
  })
  filterShips.addEventListener('click',()=>{
    let filteredShips=allAnimals.filter(animalOne=>animalOne.typeOfAnimal==='SHIPS');
    displayAnimals(filteredShips)
 })
 filterGoats.addEventListener('click',()=>{
     let filteredGoats=allAnimals.filter(animalOne=>animalOne.typeOfAnimal==='GOATS')
     displayAnimals(filteredGoats)
 })
 filterChickens.addEventListener('click',()=>{
     let filteredChickens=allAnimals.filter(animalOne=>animalOne.typeOfAnimal==='CHICKENS')
     displayAnimals(filteredChickens)
 })
 filterDogs.addEventListener('click',()=>{
     let filteredDogs=allAnimals.filter(animalOne=>animalOne.typeOfAnimal==='DOGS')
     displayAnimals(filteredDogs)
 })
 filterCats.addEventListener('click',()=>{
     let filteredCats=allAnimals.filter(animalOne=>animalOne.typeOfAnimal==='CATS')
     displayAnimals(filteredCats)
 })

 filterRabbits.addEventListener('click',()=>{
    let filteredRabbits=allAnimals.filter(animalOne=>animalOne.typeOfAnimal==='RABBITS')
    displayAnimals(filteredRabbits)
 })
  
}

let allAnimals=[];
  
let allFarmsWithAnimals=allFarms.filter(farm=>farm.farmAnimals.length !==0);
for (farm of allFarmsWithAnimals){
    for(eachAnimal of farm.farmAnimals){
      allAnimals.push(eachAnimal);
    }
}

btnAnimals.addEventListener("click", () => {
  if(someoneLoggedIn===true){
   
 displayAnimals(allAnimals)

}
});
function displayEquipment(array){
    display.innerHTML = "";
    display.innerHTML = `<h3>ALL FARM VEHICLES FOR SALE:</h3><div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
      Sort Farm Equipment for sale by
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li><button class="dropdown-item" type="button" id='sortEquipmentByName'>Name</button></li>
      <li><button class="dropdown-item" type="button" id='sortEquipmentByPriceUp'>Price(raising)</button></li>
      <li><button class="dropdown-item" type="button" id='sortEquipmentByPriceDown'>Price(decreasing)</button></li>
      <li><button class="dropdown-item" type="button" id='sortEquipmentByYearOfProductionUp'>Year Of Production(raising)</button></li>
      <li><button class="dropdown-item" type="button" id='sortEquipmentByYearOfProductionDown'>Year Of Production(decreasing)</button></li>
  
  
  
  
    </ul><div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
      Show only
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button" id='filterCars'>Cars for sale </li>
    <li><button class="dropdown-item" type="button" id='filterTractors'>Tractors for sale</li>
    <li><button class="dropdown-item" type="button" id='filterVans'>Vans for sale</button></li>
    <li><button class="dropdown-item" type="button" id='filterTrucks'>Trucks for sale</button></li>
     
    </ul>`;
  
  
    
      for (equipment of array) {
        display.innerHTML += `<div class="row" >
                  <div class="col-md-3"><img src=${equipment.img} width=100px></div>
                  <div class="col-md-2"><div>${equipment.location}</div><div> FARM</div></div>
            
                  <div class="col-md-3"> <div><b>${equipment.noOfEquipment}</b></div><div><b> ${equipment.typeOfEquipment}</b></div> </div>
                  <div class="col-md-2"><div>Price in &#8364:</div><div>${equipment.price}</div></div>
                  <div class="col-md-2" ><div>Year of production:${equipment.yearOfProduction}</div><div><button class='buyEquipment'>Add to cart!</button></div></div>
                  
  
                </div>`;
      }

      let buttonsEquipment=document.querySelectorAll('.buyEquipment');
      buttonsEquipment.forEach(element=>{
        element.addEventListener('click',()=>{
          
          let priceOfItemClicked1=element.parentElement.parentElement.previousElementSibling.lastChild.innerText;
          let itemClicked1=element.parentElement.parentElement.previousElementSibling.previousElementSibling.lastElementChild.innerText;
          let maximumItemsClicked1=element.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.innerText;
          let farmLocation1=element.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerText;
         
  
      
           function cartChecker(array){
          
            let existingObject=false;
            for(thing of array){
              if(thing.item===itemClicked1&&thing.location===farmLocation1){
                if(thing.maxItems > thing.noOfItems){
                  thing.noOfItems+=1;
                }
                existingObject=true;
                
              }
                   
            } 
             if(array.length===0){
              shoppingCart.push(new BoughtItem(itemClicked1,maximumItemsClicked1,1,priceOfItemClicked1,farmLocation1))
    
             }
             else{
              if(existingObject===false){
                shoppingCart.push(new BoughtItem(itemClicked1,maximumItemsClicked1,1,priceOfItemClicked1,farmLocation1))
              }
            }
             
           }
           cartChecker(shoppingCart)
          addToCart(shoppingCart)
          console.log(shoppingCart)

        })
      })
      let sortEquipmentByName=document.getElementById('sortEquipmentByName');
      let  sortEquipmentByPriceUp =document.getElementById('sortEquipmentByPriceUp');
      let sortEquipmentByPriceDown=document.getElementById('sortEquipmentByPriceDown') ;
      let sortEquipmentByYearOfProductionUp=document.getElementById('sortEquipmentByYearOfProductionUp');
      let sortEquipmentByYearOfProductionDown=document.getElementById('sortEquipmentByYearOfProductionDown');
      let filterCars=document.getElementById('filterCars') ;
      let filterTractors =document.getElementById('filterTractors')
      let filterVans=document.getElementById('filterVans')
      let filterTrucks=document.getElementById('filterTrucks')
  
      sortEquipmentByName.addEventListener('click',()=>{
  
          allEquipment.sort((equipmentOne,equipmentTwo)=>
              equipmentOne.typeOfEquipment.localeCompare(equipmentTwo.typeOfEquipment)
          )
          displayEquipment(allEquipment)
      })
      sortEquipmentByPriceUp.addEventListener('click',()=>{
          allEquipment.sort((equipmentOne,equipmentTwo)=>
          equipmentOne.price-equipmentTwo.price
      )
      displayEquipment(allEquipment)
      })
      sortEquipmentByPriceDown.addEventListener('click',()=>{
          allEquipment.sort((equipmentOne,equipmentTwo)=>
          equipmentTwo.price-equipmentOne.price
      )
      displayEquipment(allEquipment)
      })
      sortEquipmentByYearOfProductionUp.addEventListener('click',()=>{
          allEquipment.sort((equipmentOne,equipmentTwo)=>
          equipmentOne.yearOfProduction-equipmentTwo.yearOfProduction
      )
      displayEquipment(allEquipment)
      })
      sortEquipmentByYearOfProductionDown.addEventListener('click',()=>{
          allEquipment.sort((equipmentOne,equipmentTwo)=>
          equipmentTwo.yearOfProduction-equipmentOne.yearOfProduction
      )
      displayEquipment(allEquipment)
      })
  
      filterCars.addEventListener('click',()=>{
          let filteredCars=allEquipment.filter(vehicle=>vehicle.typeOfEquipment==='CARS')
          displayEquipment(filteredCars)
      })
      filterTractors.addEventListener('click',()=>{
          let filteredTractors=allEquipment.filter(vehicle=>vehicle.typeOfEquipment==='TRACTORS')
          displayEquipment(filteredTractors)
      })
      filterVans.addEventListener('click',()=>{
          let filteredVans=allEquipment.filter(vehicle=>vehicle.typeOfEquipment==='VANS')
          displayEquipment(filteredVans)
      })
      filterTrucks.addEventListener('click',()=>{
          let filteredTrucks=allEquipment.filter(vehicle=>vehicle.typeOfEquipment==='TRUCKS')
          displayEquipment(filteredTrucks)
      })
}
let allEquipment=[];
let allFarmsSellingEquipment=allFarms.filter(farm=>farm.farmEquipment.length !==0);
for(farm of allFarmsSellingEquipment){
    for(equipment of farm.farmEquipment){
        allEquipment.push(equipment)
    }
}

btnEquipment.addEventListener("click", () => {
  if(someoneLoggedIn===true){
  displayEquipment(allEquipment)
  
  }
});
let allGrains=[];
let allFarmsProducingGrains=allFarms.filter(farm=>farm.farmGrains.length !==0);
for(farm of allFarmsProducingGrains){
    for(grain of farm.farmGrains){
        allGrains.push(grain)
    }
}

function displayGrains(array){
    display.innerHTML = "";
    display.innerHTML = `<h3>PLANT PRODUCTS FOR SALE:</h3><div class='row'><div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
      Sort Plant Products by
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li><button class="dropdown-item" type="button" id='sortGrainsByName'>Name</button></li>
      <li><button class="dropdown-item" type="button" id='sortGrainsByPriceUp'>Price(raising)</button></li>
      <li><button class="dropdown-item" type="button" id='sortGrainsByPriceDown'>Price(decreasing)</button></li>
    </ul>
    
    
  
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
      Show only
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button" id='filterWheat'>Wheat </li>
    <li><button class="dropdown-item" type="button" id='filterCorn'>Corn</li>
    <li><button class="dropdown-item" type="button" id='filterPotatoes'>Potatoes</button></li>
    <li><button class="dropdown-item" type="button" id='filterQuinoa'>Quinoa</button></li>
    <li><button class="dropdown-item" type="button" id='filterCarrots'>Carrots</button></li>
    <li><button class="dropdown-item" type="button" id='filterApples'>Apples</button></li>
    <li><button class="dropdown-item" type="button" id='filterTomatoes'>Tomatoes</button></li>
    <li><button class="dropdown-item" type="button" id='filterPeppers'>Peppers</button></li>
    <li><button class="dropdown-item" type="button" id='filterRice'>Rice</button></li>
    <li><button class="dropdown-item" type="button" id='filterPears'>Pears</button></li>
     
    </ul>`;
  
    
      for (eachPlant of array) {
        display.innerHTML += `<div class="row" >
                  <div class="col-md-2"><img src=${eachPlant.img} width=100px></div>
                  <div class="col-md-1" ></div>
                  <div class="col-md-2"><div>${eachPlant.location}</div> <div>FARM</div></div>
            
                  <div class="col-md-3"><div><b>${eachPlant.quantity}</b></div> kg of<div><b> ${eachPlant.typeOfPlant}</b></div> </div>
                  <div class="col-md-2"><div>Price in &#8364/kg:</div><div> ${eachPlant.price}</div></div>
                  <div class="col-md-2" ><button class='buyPlantProducts'>Add to cart!</button></div>
  
                </div>`;
      }

      let btnsBuyPlantProducts=document.querySelectorAll('.buyPlantProducts');
      btnsBuyPlantProducts.forEach(element=>{
        element.addEventListener('click',()=>{
          console.log(element.parentElement.previousElementSibling.previousElementSibling.lastElementChild.innerText)

          let priceOfItemClicked2=element.parentElement.previousElementSibling.lastElementChild.innerText;
          let farmLocation2=element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerText;
          let maximumItemsClicked2=element.parentElement.previousElementSibling.previousElementSibling.firstElementChild.innerText;
          let itemClicked2=element.parentElement.previousElementSibling.previousElementSibling.lastElementChild.innerText;

          
          function cartChecker(array){
          
            let existingObject=false;
            for(thing of array){
              if(thing.item===itemClicked2&&thing.location===farmLocation2){
                if(thing.maxItems > thing.noOfItems){
                  thing.noOfItems+=1;
                }
                existingObject=true;
                
              }
                   
            } 
             if(array.length===0){
              shoppingCart.push(new BoughtItem(itemClicked2,maximumItemsClicked2,1,priceOfItemClicked2,farmLocation2))
    
             }
             else{
              if(existingObject===false){
                shoppingCart.push(new BoughtItem(itemClicked2,maximumItemsClicked2,1,priceOfItemClicked2,farmLocation2))
              }
            }
             
           }
           cartChecker(shoppingCart)
          addToCart(shoppingCart)
          console.log(shoppingCart)
        })
      })

    
    let sortGrainsByName=document.getElementById('sortGrainsByName');
    let sortGrainsByPriceUp=document.getElementById('sortGrainsByPriceUp');
    let sortGrainsByPriceDown=document.getElementById('sortGrainsByPriceDown');
    let filterWheat=document.getElementById('filterWheat')
    let filterCorn=document.getElementById('filterCorn')
    let filterPotatoes=document.getElementById('filterPotatoes')
    let filterCarrots=document.getElementById('filterCarrots');
    let filterApples=document.getElementById('filterApples')
    let filterQuinoa=document.getElementById('filterQuinoa')
    let filterTomatoes=document.getElementById('filterTomatoes');
    let filterPears=document.getElementById('filterPears')
    let filterPeppers=document.getElementById('filterPeppers')
    let filterRice=document.getElementById('filterRice');
    
  
  
    sortGrainsByName.addEventListener('click',()=>{
        allGrains.sort((grain1,grain2)=>grain1.typeOfPlant.localeCompare(grain2.typeOfPlant))
        displayGrains(allGrains)
    })
    sortGrainsByPriceUp.addEventListener('click',()=>{
      allGrains.sort((grain1,grain2)=>grain1.price-grain2.price)
      displayGrains(allGrains)
    })
    sortGrainsByPriceDown.addEventListener('click',()=>{
      allGrains.sort((grain1,grain2)=>grain2.price-grain1.price)
      displayGrains(allGrains)
    })
    filterWheat.addEventListener('click',()=>{
        let filteredWheat=allGrains.filter(grain=>grain.typeOfPlant==='WHEAT')
        displayGrains(filteredWheat)
    })
    filterCorn.addEventListener('click',()=>{
      let filteredCorn=allGrains.filter(grain=>grain.typeOfPlant==='CORN')
      displayGrains(filteredCorn)
    })
    filterPotatoes.addEventListener('click',()=>{
      let filteredPotatoes=allGrains.filter(grain=>grain.typeOfPlant==='POTATOES')
      displayGrains(filteredPotatoes)
    })
    filterCarrots.addEventListener('click',()=>{
      let filteredCarrots=allGrains.filter(grain=>grain.typeOfPlant==='CARROTS')
      displayGrains(filteredCarrots)
    })
   
    filterApples.addEventListener('click',()=>{
      let filteredQuinoa=allGrains.filter(grain=>grain.typeOfPlant==='APPLES')
      displayGrains(filteredQuinoa)
    })
    filterQuinoa.addEventListener('click',()=>{
      let filteredQuinoa=allGrains.filter(grain=>grain.typeOfPlant==='QUINOA')
      displayGrains(filteredQuinoa)
    })
    filterTomatoes.addEventListener('click',()=>{
      let filteredTomatoes=allGrains.filter(grain=>grain.typeOfPlant==='TOMATOES')
      displayGrains(filteredTomatoes)
    })
    filterPeppers.addEventListener('click',()=>{
      let filteredPeppers=allGrains.filter(grain=>grain.typeOfPlant==='PEPPERS')
      displayGrains(filteredPeppers)
    })
    filterPears.addEventListener('click',()=>{
      let filteredPears=allGrains.filter(grain=>grain.typeOfPlant==='PEARS')
      displayGrains(filteredPears)
    })
    filterRice.addEventListener('click',()=>{
      let filteredRice=allGrains.filter(grain=>grain.typeOfPlant==='RICE')
      displayGrains(filteredRice)
    })
    
    
}
btnGrainsProduced.addEventListener("click", () => {
  if(someoneLoggedIn===true){
   displayGrains(allGrains)
  }

});

let allAnimalProducts=[];

for (farm of allFarms) {
    for (eachContributingAnimal of farm.farmAnimals) {
      if (eachContributingAnimal instanceof UngulateAnimals === true) {
      allAnimalProducts.push(eachContributingAnimal)
      }
      if (eachContributingAnimal instanceof BirdAnimals === true){
          allAnimalProducts.push(eachContributingAnimal)
      }
    }}

function displayAnimalProducts(array){
    display.innerHTML = "";
  display.innerHTML = `<h3>ANIMAL PRODUCTS FOR SALE:</h3><div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Sort Plant Products by
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button" id='sortProductsByName'>Name</button></li>
  </ul>
  
  

  <div class="btn-group" role="group" aria-label="Button group with nested dropdown"><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Show only
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <li><button class="dropdown-item" type="button" id='filterCows'>Cows products </li>
  <li><button class="dropdown-item" type="button" id='filterGoats'>Goats products</li>
  <li><button class="dropdown-item" type="button" id='filterShips'>Ships products</button></li>
  <li><button class="dropdown-item" type="button" id='filterChickens'>Chicken products</button></li>
  </ul>`;

  
    for (animal of array) {
      if (animal instanceof UngulateAnimals === true) {
        display.innerHTML += `<div class="row" >
            <div class="col-md-3"><img src=${animal.img} width=100px></div>
            <div class="col-md-2"><div>${animal.location}</div> FARM</div>
      
            <div class="col-md-4">selling<div> ${
                animal.typeOfAnimal
              }'s milk  </div>Total milk for sale:<div> ${animal.totalMilkProduced()} </div>liters</div>
            <div class="col-md-1">Price: <div>${
              animal.milkPrice
            }</div>&#x20AC/l</div>
            <div class="col-md-2" ><button class='buyAnimalProductsButtons'>Add to cart!</button></div>
          </div>`;
      }
      if (animal instanceof BirdAnimals === true) {
        display.innerHTML += `<div class="row" >
            <div class="col-md-3"><img src=${animal.img} width=100px></div>
            <div class="col-md-2"><div>${animal.location} </div>FARM</div>
      
            <div class="col-md-4">selling <div><b>ChickenEggs</b></div>  Total eggs for sale:<div><b>${animal.totalEggsProduced()}</b> </div> </div>
            <div class="col-md-1">Price:<div> ${
              animal.price
            }</div>&#x20AC/egg</div>
            <div class="col-md-2" ><button class='buyAnimalProductsButtons'>Add to cart!</button></div>

            
          </div>`;
      }
    }
    let buyAnimalProductsButtons=document.querySelectorAll(`.buyAnimalProductsButtons`)
   
    buyAnimalProductsButtons.forEach(element=>{
      element.addEventListener('click',()=>{
        
           let priceOfItemClicked3=element.parentElement.previousElementSibling.firstElementChild.innerText;
           let itemClicked3=element.parentElement.previousElementSibling.previousElementSibling.firstElementChild.innerText;
           let maximumItemsClicked3=element.parentElement.previousElementSibling.previousElementSibling.lastElementChild.innerText;
           let farmLocation3=element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.innerText;

           function cartChecker(array){
          
            let existingObject=false;
            for(thing of array){
              if(thing.item===itemClicked3&&thing.location===farmLocation3){
                if(thing.maxItems > thing.noOfItems){
                  thing.noOfItems+=1;
                }
                existingObject=true;
                
              }
                   
            } 
             if(array.length===0){
              shoppingCart.push(new BoughtItem(itemClicked3,maximumItemsClicked3,1,priceOfItemClicked3,farmLocation3))
    
             }
             else{
              if(existingObject===false){
                shoppingCart.push(new BoughtItem(itemClicked3,maximumItemsClicked3,1,priceOfItemClicked3,farmLocation3))
              }
            }
             
           }
           cartChecker(shoppingCart)
          addToCart(shoppingCart)
          console.log(shoppingCart)
        
      })
    })

    let filterCows=document.getElementById('filterCows');
    let filterGoats=document.getElementById('filterGoats');
    let filterShips=document.getElementById('filterShips');
    let filterChickens=document.getElementById('filterChickens');
    let sortProductsByName=document.getElementById('sortProductsByName');
  
    filterCows.addEventListener('click',()=>{
       let filteredCowsProducts= allAnimalProducts.filter(animal=>animal.typeOfAnimal==='COWS')
        displayAnimalProducts(filteredCowsProducts)
    })
    filterGoats.addEventListener('click',()=>{
        let filteredGoatsProducts= allAnimalProducts.filter(animal=>animal.typeOfAnimal==='GOATS')
        displayAnimalProducts(filteredGoatsProducts)
    })
    filterShips.addEventListener('click',()=>{
        let filteredShipsProducts= allAnimalProducts.filter(animal=>animal.typeOfAnimal==='SHIPS')
        displayAnimalProducts(filteredShipsProducts)
    })
    filterChickens.addEventListener('click',()=>{
        let filteredChickenProducts= allAnimalProducts.filter(animal=>animal.typeOfAnimal==='CHICKENS')
        displayAnimalProducts(filteredChickenProducts)
    })
    sortProductsByName.addEventListener('click',()=>{
        allAnimalProducts.sort((item1,item2)=>item1.typeOfAnimal.localeCompare(item2.typeOfAnimal))
        displayAnimalProducts(allAnimalProducts)
    })
    
}

btnAnimalProducts.addEventListener("click", () => {
  if(someoneLoggedIn===true){
  displayAnimalProducts(allAnimalProducts)
  }
  }
);
console.log(allFarms)