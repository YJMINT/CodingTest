const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('input.txt').toString().trim();

// 풀이
let arr = [...input];
let reverse = [...arr].reverse();
let result = 1;

for (let i=0; i<arr.length; i++) {
    if (arr[i] !== reverse[i]) {
        result = 0;
        break;
    }
}

console.log(result);


