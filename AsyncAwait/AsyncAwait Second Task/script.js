console.log('conected...')


// Using the data from the https://restcountries.eu/#api-endpoints, we would like from you to create 2 individual homeworks.

// The user should insert code of a regional bloc. From the response you get, show every country that has more than one and less than four alternative spellings ("altSpellings"). Use Promise with AJAX in the function where you should send the value from the inserted regional bloc and Promise in the function where you will get all the countries with specific number of alternative spellings defined above. Also provide solution with fetch() inside asynchronous function and await both request and function where you do the check and returns every countries with specific alternative spellings.

let codeOfReginalBlock=document.getElementById("regionalBlock");
let btnGetTheCountries=document.getElementById('regionalBlockBtn');
const firstUrl='https://restcountries.eu/rest/v2/regionalbloc/';

function getCountry(code){
    return fetch(firstUrl+code)
        .then(response=>response.json())
        .catch(error=>console.error(error))
        .finally(()=>console.log('Thanks you for using the search!'))
}

async function getSpecificCountries(allCountries){
    console.log('The requested countries are:')
    for( let country of allCountries){
        if(country.altSpellings.length>1&&country.altSpellings.length<4){
            console.log(country.name)
        }
        

    }
}

btnGetTheCountries.addEventListener('click', () => {
    
    getCountry(codeOfReginalBlock.value)
        .then(response => {
           getSpecificCountries(response)    
        })
})

// SOLUTION WITH AJAX

// let codeOfReginalBlock=document.getElementById("regionalBlock");
// let btnGetTheCountries=document.getElementById('regionalBlockBtn');
// const firstUrl='https://restcountries.eu/rest/v2/regionalbloc/';

// function getCountryCode(code) {
//     return new Promise((resolve,rejected) => {
//         $.ajax({
//             url: firstUrl+code,
//             success: (response) => {
//                 resolve(response)
//             },
//             error: (error) => {
//                 rejected(error);
//             }
//         })
//     })
// }



// function getSpecificCountries(allCountries){
//     console.log('The requested countries are:')
//     for( let country of allCountries){
//         if(country.altSpellings.length>1&&country.altSpellings.length<4){
//             console.log(country.name)
//         }
        

//     }
// }

// btnGetTheCountries.addEventListener('click', () => {
    
//     getCountryCode(codeOfReginalBlock.value)
//         .then(response => {
//              getSpecificCountries(response)
//         })
//         .catch(error=>console.log(error.message));
// })