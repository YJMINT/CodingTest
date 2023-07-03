const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./input.txt').toString().trim().split("");

// 풀이
const arr = [...input];
const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
const result = Array(26).fill(0);
let res = "";

arr.forEach(item => {
    let b = alphabet.indexOf(item);
    result[b]++;
} )
console.log(result.join(" "));
