// 01 Smallest of Three Numbers

// Write a function that receives three integers and prints
// the smallest number. Use an appropriate name for the function.

function printSmallestOfThree(firstNumber, secondNumber, thirdNumber){

    const arrayOfThree = [firstNumber, secondNumber, thirdNumber];

    arrayOfThree.sort((a, b) => a - b); //we are sorting them first in ascending order

    const smallestOfThree = arrayOfThree.shift(); // we take the first element

    console.log(smallestOfThree);
}

printSmallestOfThree(2, 5, 3);

// 02 Add and Subtract

function addAndSubtract(firstNumber, secondNumber, thirdNumber){
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    
    console.log(subtract(sum(firstNumber, secondNumber), thirdNumber));
}

addAndSubtract(23, 6, 10);

// 03 Characters in Range

// Write a function that receives two characters
// and prints on a single line all the characters in
// between them according to the ASCII code.
// Keep in mind that the second character code might be before 
// the first one inside the ASCII table.

function charactersInRange(firstChar, secondChar){
    let startCharCode = firstChar.charCodeAt(0);
    let endCharCode = secondChar.charCodeAt(0);

    if (startCharCode > endCharCode) {
        [startCharCode, endCharCode] = [endCharCode, startCharCode];
    }

    let result = [];

    for (let i = startCharCode + 1; i < endCharCode; i++) {
        result.push(String.fromCharCode(i));       
    }

    console.log(result.join(' '));
}

charactersInRange('#',':');

//04 Odd And Even Sum

// You will receive a single number.
// You have to write a function, that returns the sum of all even and
// all odd digits from that number. 

function oddAndEvenSum(singleNumber){
    // 1000435
    const numberString = singleNumber.toString();

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i]); 

        if (digit % 2 === 0) {
            evenSum += digit;
        }
        else{
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);

// 05 Palindrome Integers

// A palindrome is a number,
// which reads the same backward
// as forward, such as 323 or 1001. Write a function,
// which receives an array of positive integers and checks 
// if each integer is a palindrome or not.


function checkPalindroms(positiveNumbers){

    const isPalindrome = (positiveNumber) => {
        const numberString = positiveNumber.toString();

        let left = 0;
        let right = numberString.length - 1;

        while(left < right){
            if (numberString[left] !== numberString [right]) {
            return false;
            }
            left++;
            right--;
        }

        return true;
    };

    positiveNumbers.forEach(number => 
        {
            if (isPalindrome(number)){
                console.log(true);
            }
            else{
                console.log(false);
            }
        });
}

checkPalindroms([123,323,421,121]);

// 06 Password Validator

// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

function validatePassword(password){

    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) { // Checks if password consist only of letters and digits
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    let digitCount = password.split('').filter(char => /\d/.test(char)).length;

    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }    
}

validatePassword('Pa$s$s')

// 07 NxN Matrix

// Write a function that receives a single integer 
// number n and prints nxn matrix with that number.

function printMatrix(number){
    for (let i = 1; i <= number; i++) {
        let row = Array(number).fill(number).join(' ');
        console.log(row); 
    }
}

printMatrix(7);

// 08 Perfect Number

// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum
// of its proper positive divisors.
// That is the sum of its positive divisors excluding the number itself
// (also known as its aliquot sum).

function findPerfectNumber(number){
    if (number <= 0) {
        console.log('It\'s not so perfect.');
    }

    let devisorSum = 0;

    for (let i = 1; i < number; i++) {        
        if (number % i === 0) {
            devisorSum += i;
        }        
    }

    if (devisorSum === number) {
        console.log('We have a perfect number!');
    }
    else{
        console.log('It\'s not so perfect.');
    }

}

findPerfectNumber(28);

// 09 Loading Bar

// You will receive a single number between 0 and 100, which is divided
// with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes
// a loading bar depending on the number you have received in the input.

function drawLoadingBar(number){
    if (number === 100) {
        console.log('100% Complete!');
        return;
    }

    const percentage = number / 10;

    let loadingBar = '[';

    for (let i = 0; i < 10; i++) {
        if (percentage > i) {
            loadingBar += '%';
        }
        else{
            loadingBar += '.';
        }
        
    }

    loadingBar += ']';

    console.log(`${number}% ${loadingBar}`);
    console.log('Still loading...');
}

drawLoadingBar(50);

function factorialDevision(firstNumber, secondNumber){
    const factorial = (n) =>{
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    const firstFactorial = factorial(firstNumber);
    const secondFactorial = factorial(secondNumber);

    const result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));

}

factorialDevision(5, 2);


