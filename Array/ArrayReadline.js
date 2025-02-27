const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,  //Read input from terminal 
    output: process.stdout //Display  output in terminal 
});

rl.question("Enter array elements separeted by space  : ", (input) => {
    let arr = input.split(" ").map(Number);
    console.log("your array :", arr)
    rl.close();
})
