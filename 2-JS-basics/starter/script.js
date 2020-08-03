/*LESSON 9 - in JavaScript variable types are automatically assigned depending on the value that is given*/
var firstName = "John";
var lastName = "Smith";
var age = 28;
var fullAge = true;
var job;

/*Variable mutation*/
age = "twenty eight";
job = "driver";

alert(firstName + " " + lastName + " is " + age + " years old. He is a " + job);

lastName = prompt("what is his last name?");
console.log("His last name is " + lastName);

/*LESSON 10 - Math operators*/
var currYear, yearJohn, yearMark, ageJohn, ageMark;
currYear = 2020;
ageJohn = 28;
ageMark = 33;
yearJohn = currYear - ageJohn;
yearMark = currYear - ageMark;

console.log(currYear * 2);
console.log(currYear + 2);
console.log(currYear / 2);

/*Logical operators*/
var johnOlder = ageJohn > ageMark; //this is asking a question
console.log(johnOlder); //this will return false as Mark is older

/*Typeof operator*/
console.log(typeof johnOlder); //this will return what type a variable is.

/*LESSON 11 - Operator precedence

Each operator in JavaScript effectively has a priority order. When executing a line of code, this priority order is used to determine what gets executed first.
Table of precendence can be seen here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence:*/

var now = 2018;
var drinkAge = 18;
var isDrinkAge = now - yearJohn >= fullAge;

var averageAge = (ageJohn + ageMark) / 2;

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
