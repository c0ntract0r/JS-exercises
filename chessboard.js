// Draw a chessboard on the screen
const SIZE = 8;

// My solution calls console.log() every row

let output = '';

for (let i = 0; i < SIZE; i++) {
    if (i % 2 == 0) { output = '' } else { output = ' '};
    for (let j = 0; j < SIZE; j++) {
        output += "# ";
    }
    console.log(output);
}

// Time complexity: O(n^2)
// Space complexity: O(n)