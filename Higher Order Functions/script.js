console.log('connected!')
// HomeWork
// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
   .then((response) => response.json())
   .then(students=> {
       let studentsAverageGradeHigherThan3=students.filter(student => student.averageGrade>3)
       console.log(studentsAverageGradeHigherThan3)
   })
   .catch(error =>console.error(error))

// All students with an average grade between 2 and 5
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
   .then((response) => response.json())
   .then(students=> {
       let studentsAverageGradeBetween2And5=students.filter(student => student.averageGrade>=2&&student.averageGrade<=5)
       console.log(studentsAverageGradeBetween2And5)
   })
   .catch(error =>console.error(error))
   
   
// All female student names with an average grade of 5
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
   .then((response) => response.json())
   .then(students=> {
       let studentsFemaleWithGrade5=students
       .filter(student => student.gender=='Female'&&student.averageGrade==5)
       .map(student=>`${student.firstName}`)
       console.log(studentsFemaleWithGrade5)
   })
   .catch(error =>console.error(error))
// All male student full names who live in Skopje and are over 18 years old
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
   .then((response) => response.json())
   .then(students=> {
       let studentsMaleFromSkopjeOver18=students
       .filter(student => student.gender=='Male'&&student.age>18)
       .map(student=>`${student.firstName}`)
       console.log(studentsMaleFromSkopjeOver18)
   })
   .catch(error =>console.error(error))
// The average grades of all female students over the age of 24
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
   .then((response) => response.json())
   .then(students=> {
       let gradesOfAllFemaleStudentsOver24=students
       .filter(student => student.gender=='Female'&&student.age>24)
       .map(student => student.averageGrade)

      let average= gradesOfAllFemaleStudentsOver24
       .reduce((sum,averageGrade)=>sum+=averageGrade,0)/gradesOfAllFemaleStudentsOver24.length
       console.log(average)
   })
   .catch(error =>console.error(error))
// All male students with a name starting with B and average grade over 2
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
   .then((response) => response.json())
   .then(students=> {
       let maleStudentsStartingWithBAndAverageradeOver2=students
       .filter(student => student.gender=='Male'&&student.averageGrade>2&&student.firstName[0]=='B')
       .map(student=>student.firstName)
       console.log(maleStudentsStartingWithBAndAverageradeOver2)
   })
   .catch(error =>console.error(error))
// The average grades of all female students over the age of 16 and who lives in Skopje and has "L" or "l" in their last name
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
   .then((response) => response.json())
   .then(students=> {
       let femaleStudentsOver16LiveInSkopje=students
       .filter(student => student.gender=='Female'&&student.age>16)
       .filter(student =>student.lastName.includes('l')||student.lastName.includes('L'))
       .map(student => student.lastName)
       
       console.log(femaleStudentsOver16LiveInSkopje)

     })
   
   .catch(error =>console.error(error))
// Callback function that will return result of multiplication of two numbers


// Callback function that will print the result of every user from "https://jsonplaceholder.typicode.com/users"

// vo poslednite dve ne sfativ sto tocno se bara
// Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

