// 01 Employees

//  You're tasked to create a list of employees and their personal numbers.
//  You will receive an array of strings.
//  Each string is an employee name and to assign them
//  a personal number you have to find the length of the name (whitespace included). 
//  Try to use an object.
//  At the end print all the list employees in the following format:

//  "Name: {employeeName} -- Personal Number: {personalNum}" 

function generatePersonalNumbers(employees){
    let employeeData = {};

    employees.forEach(name => {        
        const personalNum = name.length;

        employeeData[name] = personalNum;
    });

    for (const employee in employeeData) {
        console.log(`Name: ${employee} -- Personal Number: ${employeeData[employee]}`);
    }
}

let employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

generatePersonalNumbers(employees);

//02 Towns

// You’re tasked to create and print objects from a text table. 
// You will receive the input as an array of strings,
// where each string represents a table row, with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude"
// and "Longitude". The latitude and longitude columns will always
// contain valid numbers. Check the examples to get a better understanding
// of your task.
// The output should be objects. Latitude and longitude
// must be parsed to numbers and formatted to the second decimal point!

function printTowns(townsInput){
    townsInput.forEach(townData =>{
        const tokens = townData.split(' | ');

        const town = tokens[0];
        const latitude = Number(tokens[1]).toFixed(2);
        const longitude = Number(tokens[2]).toFixed(2);

        let townObject = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        };

        console.log(townObject);
    });
}

printTowns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);
