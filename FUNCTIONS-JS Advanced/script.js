// # Homework

// 1. Change the calculator homework to work with arrow functions



// 2. Write a function that will reverse a string as output (any string), using recursion
// e.g. Hello -> olleH

function reverseString(str) {
    if (str === "")
      return "";
    
      return reverseString(str.substring(1))+str[0];
  }
  reverseString("hello");

console.log(reverseString('HELLO'))

// 3. Write a function that will take two arguments. First argument should be a sentence, second one should be one word.
// Return how many times the word had appeared in that sentence.
// e.g appearance('This was a hot summer, and a very dry one', 'a') -> should return that 'a' was present 2 times.
let sentence='hello hello hello everyone!';
    sentence=sentence.split(' ');
let i=0;
// tuka imam prashanje, zoshto ne mozam da ja stavam sentence vnatre vo funkcijata pa tamu da im napravam .split() ???

function wordInSentence(sentence,word){
    if(sentence.length===0)
    return `---->The word ${word} appears ${i} times in this sentence ${sentence}`;
  else{
    if (sentence[0]===word)
        i++;
        
  }

    return sentence[0] + wordInSentence(sentence.slice(1,sentence.length),word);
    
}

console.log(wordInSentence(sentence,'hello'))

// console.log(`THe word ${word} appears ${i} times in the sentence ${sentence}`)




// 4. Using recursive function do the function that will calculate Fibonacci sequence for any number.
// fibonacciSequence(n) (where n is poitve real number) and print the result.
// e.g fibonacciSequence(8) -> should return array of following numbers 0, 1, 1, 2, 3, 5, 8, 13, 21
let arrayX=[0,1];

function fibonacchi(n){

    if(n===arrayX.length-1)
    return 0;

    arrayX.push(arrayX[arrayX.length-1]+arrayX[arrayX.length-2])
    return fibonacchi(n);
        

}
fibonacchi(8);
console.log(arrayX)

// # Bonus

// 1. Write a function that will print table using Javascript arrow functions, the table should have x columns and y rows. The values for x and y are inserted by the user.



let inputRows=document.querySelector('input');
let inputColumns=document.getElementsByTagName('input')[1];
let btnCreateTable=document.querySelector('button');



btnCreateTable.addEventListener('click',() => {
    document.getElementsByTagName('div')[1].innerHTML='<table border="2"><tbody><tr></tr></tbody></table>';
    let tableCreated=document.querySelector('tbody');
    let row=inputRows.value;
    let column=inputColumns.value;

    function createColumns(element,column){
        if(column===0)
        return '';
    
        element.lastElementChild.innerHTML+='<td>Hello</td>'
        return createColumns(element,column-1)
    }

    function createRow(element,row){
          if(row===0)
              return '';
    
        
         element.innerHTML+='<tr></tr>';
        
      createColumns(tableCreated,column);
        
    
        return createRow(element,(row-1));
        
    
    }
    
    createRow(tableCreated,row)
    
})
