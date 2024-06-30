//01 Array Rotation 

// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.

// [51, 47, 32, 61, 21], 2
// => 47, 32, 61, 21, 51
// => 32, 61, 21, 51, 47
function rotateArray(array, numberOfRotations){
    for (let i = 0; i < numberOfRotations; i++) {
        const firstNumber = array.shift();
        array.push(firstNumber);
    }

    console.log(array.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);

//02 Print Every N-th Element from an Array 

// The input comes as two parameters – an array of strings and a number.
// The second parameter is N – the step.

// The output is every element on the N-th step starting from the first one.
// If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on,
// until you reach the end of the array. 

// The output is the return value of your function and must be an array.

function printAllNthElements(array, step){
    let result = [];

    for (let i = 1; i <= array.length; i += step) {
        const element = array[i - 1];
        
        result.push(element);
    }

    return result;
}

printAllNthElements(['5', '20', '31', '4', '20'], 2);

//03 List of Names

// You will receive an array of names. 
// Sort them alphabetically in ascending order and 
// print a numbered list of all the names, each on a new line.

// This is a JS thing to not confuse the 
// algorith of lower and upperCase comparison.
function sortAlphabeticallyAscending(names){    
    names
        .sort((a, b) => a.localeCompare(b))                                            
        .forEach((name, index) => {
            console.log(`${index + 1}.${name}`);
        });     
}

sortAlphabeticallyAscending(["aJohn", "Bob", "Christina", "Ema"]);

//04 Sorting Numbers

// Write a function that sorts an array of numbers so that
// the first element is the smallest one, the second is the biggest one,
// the third is the second smallest one, the fourth is the second biggest one,
// and so on. 

// Return the resulting array.

function weirdSort(numbers){
    let sortedNumbers = numbers.sort((a, b) => a - b);
    const weirdArray = [];

    while (sortedNumbers.length > 0) {
        let firstNumber = sortedNumbers.shift();
        let lastNumber = sortedNumbers.pop();

        weirdArray.push(firstNumber);

        if (lastNumber) {
            weirdArray.push(lastNumber);
        }
    }
    return weirdArray;
}

weirdSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

//05 Reveal Words

// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.

// Find the word with the same length as the template and replace it.

function replaceWords(wordsInput, template) {
    const words = wordsInput.split(', ');
    const templateArray = template.split(' ');

    words.forEach(word =>{
        for (let i = 0; i < templateArray.length; i++) {
            if (templateArray[i].length === word.length && templateArray[i].includes('*')) {
                templateArray[i] = word;
                break;
            }           
        }
    })

    console.log(templateArray.join(' '));
}

replaceWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)

//06 Modern Times of #(HashTag)

// The input will be a single string.
// Find all special words starting with #.
// If the found special word does not consist only of letters,
// then it is invalid and should not be printed. 

// Finally, print out all the special words you found without the label (#) on a new line.


function findAllWordsStartingWithHashTag(text) {
    const pattern = /#([a-zA-z]+)/g;
    const specialWords = text.matchAll(pattern);
    
    for (const specialWord of specialWords) {
        console.log(specialWord[1]);
    }    
}

findAllWordsStartingWithHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');

//07 String Substring

// The input will be given as two separated strings
// (a word as a first parameter and a text as a second).
// Write a function that checks given text for containing a given word.
// The comparison should be case insensitive.
// Once you find a match, print the word and stop the program. 
// If you don't find the word print: "{word} not found!"

function stringSubstring(word, text){
    text = text.toLowerCase().split(' ');

    if (text.includes(word)) {
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}


stringSubstring('javascript',
'JavaScript is the best programming language'
);

//08 Pascal-Case Splitter

// You will receive a single string. 
// This string is written in PascalCase format.

// Your task here is to split this string by every word in it. 
// Print them joined by comma and space.

function pascalCaseSplit(text) {
    let words = text.match(/([A-Z][a-z]*)/g);
    
    console.log(words.join(', '));
}

pascalCaseSplit('SplitMeIfYouCanHaHaYouCantOrYouCan');
