const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

const [min, max] = input;
let A = [];

for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
        A.push(false);
    } else if (i % 3 == 0 && i / 3 != 1) {
        A.push(false);
    } else if (i % 5 == 0 && i / 5 != 1) {
        A.push(false);
    } else if (i % 7 == 0 && i / 7 != 1) {
        A.push(false);
    } else {
        A.push(i);
    }
}

A = A.filter((v) => v !== false);

for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
}
