// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
// The input comes as a single number parameter. The bounders are:
// ·	0-2 (age) – is a baby;   
// ·	3-13 (age) – is a child; 
// ·	14-19 (age) – is a teenager;
// ·	20-65 (age) – is an adult;
// ·	>=66 (age) – is an elder; 
// ·	In all other cases print – "out of bounds";
// The output should be printed to the console.

function determinePersonByAge(age){
    const types = ['baby', 'child', 'teenager', 'adult', 'elder'];

    const personType =  (age >= 0 && age <= 2) ? types[0] :
                        (age >= 3 && age <= 13) ? types[1] :
                        (age >= 14 && age <= 19) ? types[2] :
                        (age >= 20 && age <= 65) ? types[3] :
                        (age >= 66) ? types[4] :
                        'out of bounds'

    console.log(personType);
}

determinePersonByAge(-33);

// You are given a group of people, the type of the group, and the day of the week they are going to stay.
// Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.

function calculateTotalPrice(numberOfPeople, groupType,  dayOfWeek) {
    
    const prices = {
        'Friday': { 'Students': 8.45, 'Business': 10.90, 'Regular': 15.00 },
        'Saturday': { 'Students': 9.80, 'Business': 15.60, 'Regular': 20.00 },
        'Sunday': { 'Students': 10.46, 'Business': 16.00, 'Regular': 22.50 }
    };

    let pricePerPerson = prices[dayOfWeek][groupType];
    let totalPrice = pricePerPerson * numberOfPeople;

    if (groupType === 'Students' && numberOfPeople >= 30) {
        totalPrice *= 0.85; // 15% discount
    } else if (groupType === 'Business' && numberOfPeople >= 100) {
        totalPrice -= pricePerPerson * 10; // 10 people stay for free
    } else if (groupType === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95; // 5% discount
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


calculateTotalPrice(40, 'Regular', 'Saturday');

// Write a JS function to check whether a year is a leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. The output should be following:
// •	If the year is a leap, print: "yes"
// •	Otherwise, print: "no"

function isLeapYear(year){
    if (year % 4 === 0 && year % 100 !== 0) {
        console.log('yes');
    }else if(year % 400 ===0){
        console.log('yes');
    }else{
        console.log('no');
    }
}

isLeapYear(4);

// Write a function that displays numbers from given start to given end and their sum.
// The input comes as two number parameters. Print the result like the examples below:

function display_NumbersFrom_StartToEnd_And_TheirSum(start, end){
    let array = [];

    for (let i = start; i <= end; i++) {
        array.push(i);        
    }
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(...array);
    console.log(`Sum: ${sum}`);
}

display_NumbersFrom_StartToEnd_And_TheirSum(5, 10);

// You will receive a number as a parameter. {number} X {times} = {product}
// Print the 10 times table for this number.

function printMultiplicationTableOfANumber(number){
   
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} X ${i} = ${result}`);
        
    }
}

printMultiplicationTableOfANumber(5);

// Write a function, which will be given a single number. Your task is to find the sum of its digits.

function getSumOfAGivenNumbersDigits(number){

    let sum = 0;

    let numberString = Math.abs(number).toString();

    for (let char of numberString) {        
        sum += parseInt(char);
    }

    console.log(sum);
}

getSumOfAGivenNumbersDigits(12);

function wordConcatenator(firstWord, secondWord, thirdWord){
    console.log(firstWord + secondWord + thirdWord);
}

wordConcatenator('a', 'b', 'c');

function wordConcatenatorReversed(firstWord, secondWord, thirdWord){
    console.log(`${thirdWord} ${secondWord} ${firstWord}`);
}

wordConcatenatorReversed('a', 'b', 'c');

//Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
// Print the following text on the console:  
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.

function calclateMoneyForFruits(fruit, grams, pricePerKg){
    let kilograms = grams / 1000;

    let price = pricePerKg * kilograms;

    kilograms = kilograms.toFixed(2);

    price = price.toFixed(2);

    console.log(`I need $${price} to buy ${kilograms} kilograms ${fruit}.`);
}

calclateMoneyForFruits('orange', 2500, 1.80);

// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.

function checkIfAllNumberDigitsAreSame(number){
    let numberInString = Math.abs(number).toString();

    let firstDigit = numberInString[0];
    let sum = 0;
    let isSame = true;

    for (const digit of numberInString) {

        sum += parseInt(digit);
        if(firstDigit != digit){
            isSame = false;
        }    
    }

    console.log(isSame);
    console.log(sum);
}

checkIfAllNumberDigitsAreSame(1234);