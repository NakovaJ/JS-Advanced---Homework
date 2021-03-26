console.log('yey')
// CountrySearch
// CountrySearch is an application that is meant to search for countries and get data for them in real time. The application is very simple. It only has one functionality: Search and show the countries in a table

// Requirements
// There should be one search input to input name or partial name of a country
// There should be a button for search to innitiate
// When the button is clicked, a table shows with the possible answers
// The table shows:
// Flag
// Name
// Population
// Capital
// Area
// The API for countries is: https://restcountries.eu/
// Read the API documentation in order to figure out how to call for the countries
// Extra requirements
// List language names and currency names in the table as well ( only names and divided by , EX: Spanish, English )
// Add loading image while it is getting the data
// Add a filter by name, area and population in descending order
// Add a filter by name, area and population in ascending order

let submitBtn=document.getElementById('submit');
let inputUser=document.getElementById('countryCode');
let display=document.getElementById('display');
let loader=document.getElementById('loader');

const toggleLoader = toggle => {
    
    if (toggle)
        loader.style.display = "block";
    else
        loader.style.display = "none";
}
 toggleLoader(false)




submitBtn.addEventListener('click',async()=>{
     toggleLoader(true);

    let result= await fetch('https://restcountries.eu/rest/v2/name/'+ inputUser.value)
                    .then((response)=>response.json())
                    // .then(toggleLoader(false))
                    .catch(error=>{
                        // toggleLoader(false);
                        console.log(error.message)})
                    .finally(()=>console.log('Thats it my friends!'))

                    console.log(result)

    function displayResults(array){
        toggleLoader(false)
        display.innerHTML='';
    display.innerHTML+='<p></p>';

    display.innerHTML+='<select id="filter"><option value="Sort by name (ascending)">Sort by name (ascending)</option><option value="Sort by name (descending)">Sort by name (descending)</option><option value="Sort by area (ascending)">Sort by area (ascending)</option><option value="Sort by area (descending)">Sort by area (descending)</option><option value="Sort by population (ascending)">Sort by population (ascending)</option><option value="Sort by population (descending)">Sort by population (descending)</option></select> <button id="sort">List sorted countries!</button>';
    display.innerHTML+='<p></p>';
    display.innerHTML+='<p></p>';

    display.innerHTML+=`<table border width='2px'><tr><th>Flag</th><th>Name</th><th>Population</th><th>Capital</th><th>Area</th><th>Currencies</th><th>Languages</th></tr></table>`;


    array.forEach(element => {
       display.lastElementChild.innerHTML+=`<tr><th><img src=${element.flag} width='100px'></th><th>${element.name}</th><th>${element.population}</th><th>${element.capital}</th><th>${element.area}</th><th>${element.currencies.map(item=>item.name)}</th><th>${element.languages.map(item=>item.name)}</th></tr>`
    });
    sortBtn=document.getElementById('sort');
    dropdown=document.getElementById('filter');

    sortBtn.addEventListener('click',()=>{
        switch(dropdown.value){
            case "Sort by name (ascending)":
                array.sort((country1,country2)=>country1.name.localeCompare(country2.name));
                displayResults(array)
                break;
            case "Sort by name (descending)":
                array.sort((country1,country2)=>country2.name.localeCompare(country1.name));
                displayResults(array)
                break;
            case "Sort by area (ascending)":
                array.sort((country1,country2)=>country1.area-country2.area);
                displayResults(array);
                break;
            case "Sort by area (descending)":
                array.sort((country1,country2)=>country2.area-country1.area);
                displayResults(array);
                break;
            case "Sort by population (ascending)":
                array.sort((country1,country2)=>country1.population-country2.population);
                displayResults(array);
                break;
            case "Sort by population (descending)":
                array.sort((country1,country2)=>country2.population-country1.population);
                displayResults(array);
                break;
        }
    })
    }

 displayResults(result);


})