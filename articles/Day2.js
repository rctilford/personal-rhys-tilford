// Read in the input.
const fs = require('fs');
const Input = fs.readFileSync('Day2Input.txt', 'utf8').split('\r\n');
 
// Find the match points for each outcome.
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

let cx = getAllIndexes(Input, 'C X').length;

let ay = getAllIndexes(Input, 'A Y').length;

let bz = getAllIndexes(Input, 'B Z').length;

let ax = getAllIndexes(Input, 'A X').length;

let by = getAllIndexes(Input, 'B Y').length;

let cz = getAllIndexes(Input, 'C Z').length;

let bx = getAllIndexes(Input, 'B X').length;

let cy = getAllIndexes(Input, 'C Y').length;

let az = getAllIndexes(Input, 'A Z').length;

// Multiply the match outcomes by there respective point values.
let sum = (cx*7)+(ay*8)+(bz*9)+(ax*4)+(by*5)+(cz*6)+(bx)+(cy*2)+(az*3);

// Part 1 answer
console.log(sum);

