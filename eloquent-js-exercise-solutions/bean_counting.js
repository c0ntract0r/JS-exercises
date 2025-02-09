/**
 * Write a function called countBs that takes a string
 * as its only argument and returns a number that indicates
 * how many uppercase B characters there are in the string.
 * Second: Write a function called countChar, taking a second
 * argument, indicating the character to be counted.
 */

// first function - final version
function countBs(str) {
    return countChar(str, 'B');
}

// second function
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) { count++; }
    };
    return count;
}

// stupid test cases
console.log(countBs('BBBbbbbBBbfjsdfisdjf'));
console.log(countChar('WeWereBiggerW', 'W'));