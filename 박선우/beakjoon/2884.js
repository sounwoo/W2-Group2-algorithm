const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

const [a, b] = input;

if (0 < a && b < 45) {
    console.log(a - 1, b + 15);
} else if (a == 0 && b < 45) {
    console.log(23, b + 15);
} else {
    console.log(a, b - 45);
}

// if (b > 45) {
//     console.log(a, b - 45);
// } else if (a < 0 && b < 45) {
//     console.log(a - 1, 15 + b);
// } else if (a < 0 && b > 45) {
//     console.log(a, b - 45);
// } else if (a === 0 && b < 45) {
//     console.log(23, 15 + b);
// }
