// const input = require('fs').readFileSync('./input.txt').toString().split('\n');
// console.log(input);
// let a = input[0].split(' ').map(Number)[0];
// let b = input[0].split(' ').map(Number)[1];
// const c = Number(input[1]);

const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

let [a, b, c] = input;

if (b + c >= 60) {
    const d = Math.floor((b + c) / 60); // 소수점 자리 버림
    b = (b + c) % 60; // 60으로 나눈 나머지 몫 67 % 60 = 6
    a = (a + d) % 24; // 24로 나눈 나머지 몫( a + d > 24 : 1 ? 0)
    console.log(a, b);
} else {
    console.log(a, b + c);
}
