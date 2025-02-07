const SIZE = 8;
let output = "";

for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
        output += (i + j) % 2 === 0 ? "#" : " ";
    }
    output += "\n"; // moving to the next line
}

console.log(output);

// Time complexity: O(n^2)
// Space complexity: O(n^2)