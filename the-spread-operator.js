/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
console.log("Second array:", arr2)
console.log("First array:", arr1)

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};

console.log("First object:", obj1);
console.log("Second Object:", obj2);
console.log("Third Object:", obj3);

// Copying only part of an array/object
let arr5 =[...arr1, {...obj1}, ...arr3, "x", "y", "z"]
console.log(arr5)

//Spread operator challenge

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

/*
    You will use the spread operator to copy an array which is stored in an object which itself is stored in an array. 
    You will create a single line arrow function (has no return statement), which should copy an array passed in and add the value passed to it, then return the array.
    Create a variable named subjects using the keyword let
    Assign it a copy of the subjects array from the first object in the students array
    Create a variable named update using the keyword const
    Assign the variable update a single line arrow function  (should not have a return statement)
    The arrow function should take two parameters named: item and val the arrow function should copy the array passed in and add the value passed to it, then return the array.
    Create a variable named: updatedSubjects using the keyword let
    Variable updatedSubjects should be assigned the return value from calling the update function passing in the subjects array and the string "Electronics"
    Variable updatedSubjects should have the correct value
    The original version of the subjects array in the students array should not have been modified
    log out the variable updatedSubjects to see its value
    log out students[0] to see that it has not been changed, if you have done everything correctly

*/

/*
I created a variable subjects and assigned it a copy 
of the subjects array from the first object in the students array using 
the spread operator [...students.subjects].
*/
let subjects = [...students[0].subjects];

/*
    a constant update is declared and 
    assigned a single-line arrow function that 
    takes two parameters (item and val). 
    This function copies the array passed in, 
    adds the value passed to it, and then returns the updated array.
*/
const update = (item, val) => [...item, val];

/*
    A new variable updatedSubjects is declared and assigned the return value 
    from calling the update function with subjects array and the string 
    "Electronics". This creates an updated copy of the subjects array 
    with "Electronics" added to it.
*/
let updatedSubjects = update(subjects, "Electronics");

/*
    The code then logs out the updatedSubjects variable to display its value, 
    showing the subjects array with "Electronics" added.
    Checking Original Array:
*/
console.log(updatedSubjects);

/*
    Finally, it logs out students to confirm that the original 
    subjects array in the first student object has not been modified
     by these operations.
*/
console.log(students[0]);

/*
    This code demonstrates how to create a copy of an array 
    stored within an object in an array, modify the copied 
    array using a function, and ensure that the original data 
    remains unchanged.
*/