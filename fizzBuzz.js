// this was my solution before asking ChatGPT. Not too elegant

for (let i = 1; i < 101; i++) {
    if  (i % 3 == 0) { 
        if (i % 5 == 0) { console.log(`FizzBuzz`) }
        else console.log(`Fizz`);
     }
    else if (i % 5 == 0) console.log(`Buzz`)
    else console.log(i);
}

/**
 * Time complexity: O(n), where n is (1, 100)
 * Space complexity: O(1)
 */