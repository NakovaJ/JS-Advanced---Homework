console.log("working...");

// The user should insert ISO 3166-1 2-letter country code. From the response you get, log every country name that has the same currency as the country from the response. Use Promise with AJAX in every function that you want to receive some response from the api-endpoints. Also provide solution with fetch() when you send requests. The function that supposed to log every country name should be asynchronous and you shall await the call for specific country data.


let codeOfReginalBlock = document.getElementById("regionalBlock");
let btnGetTheCountries = document.getElementById("regionalBlockBtn");
const firstUrl = "https://restcountries.eu/rest/v2/";
const secondUrl = "alpha/";
const thirdUrl="all";

 function getCountry(code) {
  return fetch(firstUrl + secondUrl + code)
    .then((response) => response.json())
    .catch((error) => console.error(error))
    .finally(() => console.log("Thanks you for using the search!"));
}

 function checkAllCountries(){
    return fetch(firstUrl+thirdUrl)
        .then(response=>response.json())
        .catch(error=>console.error(error))
}

 function getCurrency(data,givenCountry){
    console.log(`These are all the countries in the World that use the same currency as the inserted country:`)
    for(element of data){
        if(element.currencies[0].name==givenCountry){
            console.log(element.name)
        }
    }
}




btnGetTheCountries.addEventListener("click", async () => {
    let insertedCountry= await getCountry(codeOfReginalBlock.value);
    let insertedCountryCurrency=insertedCountry.currencies[0].name;

    let allCountries= await checkAllCountries();
    
    await getCurrency(allCountries,insertedCountryCurrency)
    
  

  });


// SOLUTION WITH AJAX

// let codeOfCountry = document.getElementById("regionalBlock");
// let btnGetTheCountries = document.getElementById("regionalBlockBtn");
// const firstUrl = "https://restcountries.eu/rest/v2/";
// const secondUrl = "alpha/";
// const thirdUrl="all";

// function getCountryCode(code) {
//     return new Promise((resolve,rejected) => {
//         $.ajax({
//             url: firstUrl+secondUrl+code,
//             success: (response) => {
//                 resolve(response.currencies[0].code)
//                 // console.log(response.currencies[0].code)
//             },
//             error: (error) => {
//                 rejected(error);
//             }
//         })
//     })
// }

//  function checkAllCountries(){
//      return new Promise((resolve,reject)=>{
//          $.ajax({
//              url:firstUrl+thirdUrl,
//              success:(response)=>{
        
//                 resolve(response)
//              },
//              error:(error)=>{
//                  reject(error);
//              }
//          })
//      })
// }


//  function getCurrency(data,givenCountry){
//     console.log(`These are all the countries in the World that use the same currency as the inserted country:`)
//     for(element of data){
//         if(element.currencies[0].code===givenCountry){
//             console.log(element.name)
//         }
//     }
// }




// btnGetTheCountries.addEventListener("click", () => {

//     checkAllCountries()
//     .then(data=>{
        
//         getCountryCode(codeOfCountry.value)
//         .then((secondData)=>{
//             getCurrency(data,secondData)
//         })
     
//     })
   


//     })

    
    
    
  


