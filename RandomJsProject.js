"use strict";
//alert ('Hello World');
// Sum of two numbers
/*let a = prompt('Enter the first number: ');
let b = prompt('Enter the second number:');

var c = parseInt(a) + parseInt(b) ;

console.log('The sum of' +a+ 'and' +b+ 'is:' +c); */

//-------- To find Square Root of a Number--------////
/*
var a = prompt("Please enter a number:");
b = Math.sqrt(a);
console.log(b); */

// ----------Find area of a triangle getting data from user//
//--------- (base * height / 2)

/* var base = prompt('Please enter the base of the triangle:');
var height = prompt('Please enter the height of the triangle:');

area = (base * height) / 2;

console.log(area); */

//--------Swapping two numbers using temporary variable------
/*
var a = prompt('Enter the a value: ');
var b = prompt('Enter the b value:');
console.log(`The value of a is ${a}, and the value of b is ${b}`);
var temp;
temp = a;
a = b; 
b = temp;

//--------Swapping two numbers not using temporary variable------
//a = a + b;
//b = a - b;
//a = a - b;
console.log(`After swapping \n The value of a is ${a}, and the value of b is ${b}`);
*/

// Convert Kms to miles using JS Functions
/* var distance = prompt('Enter the distance in Kms:')

function milesConversion(distance){
    return distance * 0.621371;

}
console.log(milesConversion(distance)); */

// Convert Kms to Miles
/*function convert(){
    var kms = document.getElementById('data').value;
    const factor = 0.621371;
    var miles = kms * factor;
    document.getElementById('res').innerText = `${miles} miles `;
    // another way to print the results
    //document.getElementById('res').innerText = miles + 'Miles';
}
*/
// Convert Celsius to Fahrenheit - JS Function
// Fahrenheit = Celsius  * 1.8 + 32
/* function convert (){
    var c = document.getElementById('data').value;
    var f = (c * 1.8) + 32;
    document.getElementById('res').innerHTML = `${c} C = ${f} F`;
} */

// Check if a number is positive, negative or zero
/* function check(){
    var value = document.getElementById('data').value;
    //var res = Math.sign(value);
    if(value > 0){
        res = `${value} is a positive number`;
    } else if(value < 0){
        res = `${value} is a negative number`;
    } else if (value == 0){
        res = `${value} is a zero`;
    } else {
        res = `${value} is not a number`;
    }
    document.getElementById('res').innerText = res;
} */

// Generate random number
/* var x = Math.random();
 console.log('Before Calculation:' + x);
 // Math.floor(Math.random()* (highestNumber - lowestNumber)) + lowestNumber

 x = x * (10 - 1) + 1;
 console.log('After Calculation:'+ x);
 console.log('Floor Calculation:'+ Math.floor(x)); */

// -------Odd number of Even-----//

//var x = 11;
//if (x%2 == 0){
// even number
// console.log(`${x} is an even number`);
//}else {
// odd number
// console.log(`${x} is an odd number`);
//}

// using tenery
//var res = (x%2 == 0) ? "Even": "Odd";
//console.log(`${x} is an ${res} number`)

// --- Check if a number is prime(divisive by 1 and by itself)
/*var number = prompt('Please enter a number:')
 if (number == 1){
    console.log(`${number} is neither prime nor composite number`);
 } else if(number < 1) {
    console.log(`${number} is a not prime number`);
 } else {
    for (var i = 2; i < number; i++){
        if(number%i == 0){
            var res = `${number} is not a prime number`;
            break;
        } else{
            var res = `${number} is  a prime number`;
        }
    }
    console.log(res);
 } */

// Find the largest number between 3 numbers
/*function check (p,q,r){
    if(p >= q && p >= r){
        return p;
    }else if(q >= p && q >= r){
        return q;
    } else{
        return r;
    }
 }

 var a = prompt('Please enter the first number:');
 var b = prompt('Please enter the second number:');
 var c = prompt('Please enter the third number:');
 var x = check(a,b,c);
 console.log(`${a}, ${b}, ${c} : The largest is ${x}`); */

/// Factorial of a number ----
//var number = prompt("Please enter a number ");
//var fact = 1; // Using in recursion
/*if(number == 0){
    console.log(`The factorial of ${number} is 1`);
 }else if(number <0){
    console.log(`The factorial of negative number is not possible`);
 } else {
    for(var i=1; i<=number; i++){
        fact = fact * i;
        
    }
    console.log(`The factorial of ${number} is ${fact}`);
 }
*/
// Using recursion
/*console.log(fact);
function factor(n){
    if(n>number){
        return;
    }
    var temp = fact;
    fact = fact * n; 
    console.log(fact);
    n++;
    factor(n);
}
factor(1);
console.log(`The factorial of ${number} is ${fact}`);*/

// Print the table of any user given number
/*function table(number){
        for(var i=1; i<=10;i++){
            var res = i*number;
            console.log(`${number} x ${i} = ${res}`);
        }
}
table(8);*/

// Check Armstrong Number Ex: 153 = 1*1*1 + 5*5*5 + 3*3*3
/*var number = prompt("Please enter a number");
var temp = number;
var noOfDigits = number.toString().length;
var sum = 0;
while(temp>0){
        var digit = temp%10;
        sum += digit**noOfDigits;
        temp = parseInt(temp/10);
}
if(sum == number){
    console.log(`${number} is an armstrong number`);
} else{
    console.log(`${number} is not an armstrong number`);
} */

// Check if number have the same last digits
/*var a = prompt("Please enter 'a' number:");
var b = prompt("Please enter 'a' number:");
var c = prompt("Please enter 'a' number:");

var res1 = a%10;
var res2 = b%10;
var res3 = c%10;

if(res1 === res2 && res1 === res3){
    console.log(`${a}, ${b}, ${c} are having the same last digit`);
}else{
    console.log(`${a}, ${b}, ${c} are not having the same last digit`);

}*/

// Check Palindrome using array methods
// String can be read forward or backward. Ex:madam
/*var string = prompt("Please enter a string");
var stringArray = string.split('');
var stringArrayRev = stringArray.reverse();
var revString = stringArrayRev.join('');
if(string === revString){
    console.log(`${string}: is palindrome`);
} else{
    console.log(`${string}: is not palindrome`);
}*/
// Palindrome using for Loop
/*var string = prompt("Please enter a string");
var len = string.length;
var msg = 'It is a palindrome';
for(var i=0; i<len/2; i++){
    if(string[i] != string[len - 1 - i]){
        msg = 'It is not a palindrome';
    }

}
console.log(`${string}: ${msg}`); */

// Check the number of occurrences oa a character in a string
// Using for Loop
/*var string = prompt("Please enter a string");
var letter =  prompt("Please enter a letter");
let strlen = string.length;
var counter = 0;
for(var i = 0; i<strlen; i++){
    if(string[i]== letter){
        counter++;
     }
}
console.log(`${string} => ${letter} => ${counter}`); */

// Check whether a string starts and ends with
//certain characters
/*var string = prompt("Please enter a string");
console.log(string);
var testStart = string.startsWith('W');
var testEnd = string.endsWith('e');
if(testStart == true && testEnd == true){
    console.log(`${string} starts with W and ends with e`);
}else if(testStart == true && testEnd == false){
    console.log(`${string} starts with W`);
}else if(testStart == false && testEnd == true){
    console.log(`${string} ends with e`);
}else {
    console.log(`${string} neither starts with W nor/ ends  with e`);
} */

// Check if a string contains a substring
/*var string = prompt("Please enter a string");
var subString = "the";
var test1 = string.includes(subString);
console.log(test1);
var test2 = string.indexOf(subString);
console.log(test2); */

// Convert the first letter of a string into Uppercase
/*var string = prompt("Please enter a string");
console.log(string);
var first = string.charAt(0);
console.log(first);
console.log(first.toUpperCase());
var rem = string.slice(1);
console.log(rem);
var caps = first.toUpperCase() + rem;
console.log(`Final Result: ${caps}`); */

// Counting number of Vowels in string using Regex
// Regex is regular expression. it is used to match, test
// and find character(s) from a string.
/*var string = prompt("Please enter a string");
const reg = /[aeiou]/gi;
var chars = string.match(reg);
console.log(chars.join(','))
console.log(chars.length);
*/

// Find Armstrong numbers between an Interval
/*var a = prompt ("Please enter lower number");
var b = prompt ("Please enter lower number");
for (var i = a; i<=b; i++){
    var temp = i;
    var noOfDigits = i.toString().length;
    var sum = 0;
    while(temp>0){
        var digit = temp%10;
        temp = parseInt(temp/10);
        sum += digit ** noOfDigits;
    }
    if(sum == i){
        console.log(i);
    }
} */

// Find Sum of natural Number using recursion
/*function sum(num){

    if(num>0){
        return num + sum(num-1);
    } else{
        return num;
    }

}
var res = sum(10);
console.log(res); */

// Find the factors of a number
/*var number = prompt("Please enter a number");
for(var i = 0; i<=number; i++){
    if(number%i == 0){
        console.log(i);
    }
} */

// Make a simple Calculator using switch case
/*
var num1 = prompt("Please enter 1st number");
var num2 = prompt("Please enter 2nd number");
var opr = prompt("Please select among +, -, x, /");
switch(opr)
{
   case "+" :
      var res = parseFloat(num1) + parseFloat(num2);
      console.log(`${num1} + ${num2} = ${res}`);
      break;
    
    case "-" :
      var res = parseFloat(num1) - parseFloat(num2);
      console.log(`${num1} - ${num2} = ${res}`);
      break;
    
      case "x" :
      var res = parseFloat(num1) * parseFloat(num2);
      console.log(`${num1} * ${num2} = ${res}`);
      break;
    
      case "/" :
        var res = parseFloat(num1) / parseFloat(num2);
        console.log(`${num1} / ${num2} = ${res}`);
        break;

    default : 
            console.log('Invalid Operator');

} */

// Print Fibonacci Sequence (the first two term are 0, 1)
// The next is defined as the sum of the previous two terms
// 0,1,1,2,3,5,8,13
/* var a = 0, b = 1;
console.log(a);
console.log(b);
for(var i = 0; i<=10; i++){
    var temp = a + b; // 0 +1 // 1
    console.log(temp);
    a = b; // 0=> 1
    b = temp; // 1 => 1
} */

// Replace Character in a string
/*var string = "Mr. Red has a red car and a red bike";
console.log(string);
var reg = new RegExp('Red', 'gi');
var newString = string.replace(reg, 'Blue');
console.log(newString);*/

// Reverse a string using for loop
/*var string = prompt("Please enter a string");
var strLen = string.length;
var revStr = '';
for(var i = strLen-1; i>=0; i--){
    revStr += string[i];
}
console.log(`${string} reverse is ${revStr}`);*/

//------Sort words in Alphabetical order ---
// var string = prompt("Please enter a string");
// var stringArray = string.split(' ');
// stringArray.sort();
// console.log(string)
// console.log(stringArray)
// console.log(stringArray.join(' '));
