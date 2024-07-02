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