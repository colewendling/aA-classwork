const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
