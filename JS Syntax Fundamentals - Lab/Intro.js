function multiplyByTwo(num){
    console.log(num * 2)
}

multiplyByTwo(5);

// You will be given 3 parameters – student name (string), age (number), and average grade (number). Your task is to print all the info about the student in the following format: 
// `Name: {student name}, Age: {student age}, Grade: {student grade}`
//  Note: The grade should be formatted to the second decimal point.

function giveStudentIndo(name, age, averageGrade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${averageGrade.toFixed(2)}`);
}

giveStudentIndo('Mustafa', 20, 5.3333);

// Write a function that receives a single number and checks if the grade is excellent or not. 
// If it is, print "Excellent", otherwise print "Not excellent".

function getExcellentGrade(grade){
    if(grade>=5.50){
        console.log('Excellent');
    }else{
        console.log('Not excellent');
    }
}

getExcellentGrade(5.51);

function monthPrinter(monthNumber){

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 

    if(monthNumber < 1 || monthNumber > 12){
        console.log('Error!');
    }

    if(monthNumber === 1){
        console.log(months[0]);
    }else if(monthNumber === 2){
        console.log(months[1]);
    }else if(monthNumber === 3){
        console.log(months[2]);
    }else if(monthNumber === 4){
        console.log(months[3]);
    }else if(monthNumber === 5){
        console.log(months[4]);
    }else if(monthNumber === 6){
        console.log(months[5]);
    }else if(monthNumber === 7){
        console.log(months[6]);
    }else if(monthNumber === 8){
        console.log(months[7]);
    }else if(monthNumber === 9){
        console.log(months[8]);
    }else if(monthNumber === 10){
        console.log(months[9]);
    }else if(monthNumber === 11){
        console.log(months[10]);
    }else if(monthNumber === 12){
        console.log(months[11]);
    }

}

monthPrinter(12);

function mathOperations(firstNumber, secondNumber, operator){
    //'+', '-', '*', '/', '%', '**'. -> operators
    const operators = ['+', '-', '*', '/', '%', '**'];

    if(operator == [operators[0]]){
        console.log(firstNumber + secondNumber);
    }else if(operator == operators[1]){
        console.log(firstNumber - secondNumber);
    }else if(operator == operators[2]){
        console.log(firstNumber * secondNumber);
    }else if(operator == operators[3]){
        console.log(firstNumber / secondNumber);
    }else if(operator == operators[4]){
        console.log(firstNumber % secondNumber);
    }else if(operator == operators[5]){
        console.log(firstNumber ** secondNumber);
    }
}

mathOperations(3, 2, '**');

function findTheLargestNumberOutOfThreeNumbers(firstNumber, secondNumber, thirdNumber){
    //Write a function that takes three number arguments as input and finds the largest of them.
    //Print the following text on the console:  `The largest number is {number}.`.

    let biggestNumber;

    if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
        biggestNumber = firstNumber
    }
    else if(secondNumber >= firstNumber && secondNumber >= thirdNumber){
        biggestNumber = secondNumber;
    }
    else if(thirdNumber >= firstNumber && thirdNumber >= secondNumber){
        biggestNumber = thirdNumber;
    }

    console.log(`The largest number is ${biggestNumber}.`);
}

findTheLargestNumberOutOfThreeNumbers(1, 221, 1);


function getTicketPrice(dayType, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    const prices = {
        Weekday: { child: 12, adult: 18, senior: 12 },
        Weekend: { child: 15, adult: 20, senior: 15 },
        Holiday: { child: 5, adult: 12, senior: 10 }
    };

    let category;

    if (age >= 0 && age <= 18) {
        category = 'child';
    } else if (age > 18 && age <= 64) {
        category = 'adult';
    } else if (age > 64 && age <= 122) {
        category = 'senior';
    }

    const price = prices[dayType][category];
    console.log(`${price}$`);
}

function getCircleArea(number){
    if(typeof(number) === 'number'){
        let result;
    
        result = Math.pow(number, 2) * Math.PI;
        console.log(result.toFixed(2));       
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`)
    }
    
}

getCircleArea('kur');

function printNumbersFromOneToFive(){
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

printNumbersFromOneToFive();

function printNumbersFromMtoN(M, N){
    for (let i = M; i >= N; i--) {        
        console.log(i);
    }
}

printNumbersFromMtoN(6, 2);