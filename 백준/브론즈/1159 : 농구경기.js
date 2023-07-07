const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

// 풀이
input.shift();
input.sort();
let obj = {};
let result = "";

for (let i = 0; i < input.length; i++) {
    if (obj[input[i][0]]) {
        obj[input[i][0]]++;
    } else {
        obj[input[i][0]] = 1;
    }
}

for (let i in obj) {
    if (obj[i] >= 5) result += i;
}


if (result.length <= 0) {
    console.log ("PREDAJA");
} else {
    console.log(result);
}

