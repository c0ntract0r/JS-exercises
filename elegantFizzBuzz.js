let res;

for (let i = 0; i <= 100; i++) {
    res = "";
    if (i % 3 === 0) res += "Fizz";
    if (i % 5 === 0) res += "Buzz";

    // if res is empty, yield i
    console.log(res || i);
}