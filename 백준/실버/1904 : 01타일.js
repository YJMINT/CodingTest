const fs = require("fs");
// FIXME: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim();
const n = Number(input); //길이

let memo = new Array(n + 1).fill(0); //경우의 수 저장
memo[0] = 0;
memo[1] = 1;
memo[2] = 2;

for (let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 2] + memo[i - 1]) % 15746;
}

console.log(memo[n]);
