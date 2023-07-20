const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

let N = +input.shift();
let numbers = [];
let rgx = /\d+/g; // 문자열에서 연속적으로 나타나는 모든 숫자 패턴

for (let i = 0; i < N; i++) {
    input[i].match(rgx)?.forEach(n => {
        numbers.push(BigInt(n)); //Number자료형으로 표현할 수 있는 최대 정수는 2^53-1이므로, 최대 100글자를 수용하기 위해선 더 큰 메모리를 사용하는 자료형인 BigInt 자료형 사용
    });
}

console.log(
    numbers
        .sort((a, b) => a > b ? 1 : -1)
        .join('\n')
);



// const fs = require('fs');
// const input = fs.readFileSync('input.txt').toString().trim().split('\n');
// const number = input.shift();
//
// const regex = /[^0-9]/g;				// 숫자가 아닌 문자열을 선택하는 정규식
// let result = [];
// let arr = [];
// for (let i = 0; i < input.length; i++) {
//     let inputChange = input[i].replace(regex, " ").trim(); // 문자열을 빈 공간으로 바꿈 (여기에서 불필요한 공간에 나타나는 0 제거해줘야함..!!!!!)
//     result[i] = inputChange.trim().split(' ').map(Number);
//     arr =result.flat().sort();
// }
//
//
// for (let j=0; j < arr.length; j++) { //이부분 잘못된듯
//     if (arr[j] === 0) {
//         arr.shift();
//     }
// }
//
// console.log(arr.join('\n'));

