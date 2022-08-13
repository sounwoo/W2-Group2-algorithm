const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

if (input[0] > 0) {
    input[1] > 0 ? console.log(1) : console.log(4);
} else if (input[0] < 0) {
    input[1] > 0 ? console.log(2) : console.log(3);
}

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];
// rl.on('line', function (line) {
//     input.push(parseInt(line));
// }).on('close', function () {
//     const a = input[0];
//     const b = input[1];

//     if (a > 0 && b > 0) {
//         console.log(1);
//     }
//     if (a < 0 && b > 0) {
//         console.log(2);
//     }
//     if (a < 0 && b < 0) {
//         console.log(3);
//     }
//     if (a > 0 && b < 0) {
//         console.log(4);
//     }
//     process.exit();
// });
