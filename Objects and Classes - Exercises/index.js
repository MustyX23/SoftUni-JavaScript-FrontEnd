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

//03 Store Provision

// You will receive two arrays.
// The first array represents the current stock of the local store.
// The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold 
// the name of the product and every odd index will hold the quantity of that product.
// The second array could contain products that are already in the local store. 
// If that happens increase the quantity for the given product. 
// You should store them into an object, and print them in the following format:
// (product -> quantity)
// All of the arrays’ values will be strings.

function storeProvision(currentStockInput, productsForDeliveryInput){
    let stock = new Map();

    function addStock(stockArray){
        for (let i = 0; i < stockArray.length; i+=2) {
            let product = stockArray[i];
            let quantity = parseInt(stockArray[i + 1]);
            
            if (stock.has(product)) {
                stock.set(product, stock.get(product) + quantity);
            }
            else{
                stock.set(product, quantity);
            }
        }
    }

    addStock(currentStockInput);
    addStock(productsForDeliveryInput);

    // Print the stock in the desired format
    stock.forEach((quantity, product) => {
        console.log(`${product} -> ${quantity}`);
    });
}

// 04 Movies

// Write a function that stores information about movies inside an array.
//  The movie's object info must be name, director, and date.
//   You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if
//  the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info
//  (if the movie has no director, name, or date, don’t print it) in JSON format.

function storeMovies(commands){

    let movies = [];

    commands.forEach(command =>{
        if (command.startsWith('addMovie ')) {
            //"addMovie {movie name}"
            let movieName = command.substring(9);
            movies.push({name: movieName});
        }
        else if(command.includes(' directedBy ')){
            let [movieName, director] = command.split(' directedBy ');

            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        }
        else if(command.includes(' onDate ')){
            let [movieName, date] = command.split(' onDate ');

            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    });

    let outputMovies = movies.filter
        (movie => movie.name && movie.director && movie.date);

    outputMovies.forEach(movie => {
        console.log(JSON.stringify(movie));
    });
}

//05 Inventory

// Create a function, which creates a register for heroes, with their names,
// level, and items (if they have such). 
// The input comes as an array of strings.
// Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}

function registerHeroes(input){
    let heroes = [];

    for (const entry of input) {
        const tokens = entry.split(' / ');

        const heroName = tokens[0];
        const heroLevel = tokens[1];
        const items = tokens[2].split(', ');

        const hero = {
            name: heroName,
            level: heroLevel,
            items: items
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );
// 06 Words Tracker
// Write a function that receives an array of words and
// finds occurrences of given words in that sentence. 
// The input will come as an array of strings.
// The first string will contain the words you
// will be looking for separated by a space.
// All strings after that will be the words in which you
// will check for a match.
// Print for each word how many times it occurs.
// The words should be sorted by count in descending

function wordsTracker(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
}

// 07 Odd Occurrences

// Write a function that extracts the elements of a sentence,
// if it appears an odd number of times (case-insensitive).
// The input comes as a single string. 
// The words will be separated by a single space.

function oddOccurences(input) {
    let words = input.split(" ").map(el => el.toLowerCase());
    let collection = {};

    collection = words.reduce((acc, cur, i) => {
        if (!acc.hasOwnProperty(cur)) {
            acc[cur] = 1;
        } else {
            acc[cur]++;
        }

        return acc;
    }, {});

    collection = Object.entries(collection)
        .filter(([word, value]) => {
            if (value % 2 !== 0) {
                return word;
            }
        })
        .map(el => el[0]);

    console.log(collection.join(" "));
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// 08 Piccolo

//Write a function that:
// •	Records a car number for every car that enters the parking lot
// •	Removes a car number when the car goes out
// •	Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".

function solve(input) {
    let obj = {};

    obj = input.reduce((acc, cur) => {
        let [command, carNumber] = cur.split(', ');

        if (acc.hasOwnProperty(carNumber)) {
            if (command === 'OUT') {
                acc[carNumber] = 'out';
            }else if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        } else {
            if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        }

        return acc;
    }, {});

    obj = Object.entries(obj)
        .filter(([carNumber, status]) => {

            if (status ===  'parked') {
                return carNumber;
            }
        })
        .map(el => el[0])
        .sort((a, b) => a.localeCompare(b))

    if (obj.length > 0) {
        console.log(obj.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

// 09 Make a Dictionary

// You will receive an array with strings in the form of JSON's. 
// You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. If you receive the same term twice, replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// `Term: ${term} => Definition: ${definition}`
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.

function dictionary(input){
    let dict = {};
    for (let element of input){
        let obj = JSON.parse(element);
        dict = Object.assign(dict, obj);        
    } 
        
    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a, b) => a.localeCompare(b));   
     
    for (let term of sortedKeys) {
        let definition = dict[term];             
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

//10 Class Vehicle

// Create a class with the name Vehicle that has the following properties:
// •	type – a string
// •	model – a string
// •	parts – an object that contains:
// o	engine – number (quality of the engine)
// o	power – number
// o	quality – engine * power
// •	fuel – a number
// •	drive – a method that receives fuel loss and decreases the fuel of the vehicle by that number
// The constructor should receive the type, the model, the parts as an object, and the fuel
// In judge post your class (Note: all names should be as described)

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            get quality() {
                return this.engine * this.power;
            }
        };
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
