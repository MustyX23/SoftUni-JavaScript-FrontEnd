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

function sortAlphabeticallyAscending(names){
    
}


