/**
 * Define a recursive function, that will fit this description:
 * Zero is even
 * One is odd
 * For any other number N, its evenness is the same as N - 2
 * Function must accepta single positive whole number
 * Exercise is fucked up.
 */

function isEven(N) {
    if (N === 0) { return true; }
    else if (N === 1) { return false; }
    else return isEven(N - 2);
}

console.log(`Testing on 50: ${isEven(50)}\nTesting on 75: ${isEven(75)}.`);