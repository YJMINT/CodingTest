const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('');
let inputBigLetterChange = input.map(v => v.toUpperCase()) //input값 전부 대문자로 변경
const bigLetter = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let count = new Array(26).fill(0);

for (let j=0; j<inputBigLetterChange.length; j++) { //대문자로 바꾼 input값
    for (let i = 0; i<bigLetter.length; i++) { //대문자 배열
        if (bigLetter[i]===(inputBigLetterChange[j])) {
            count[i] += 1;
        }
    }
}

const maxValue = Math.max(...count);//count 배열의 최대값

let maxCountIndex = [];

for (let i = 0; i < count.length; i++) {
        if (count[i] === maxValue) { //count배열을 순회하며 최대값을 만나면
            maxCountIndex.push(bigLetter[i]); //maxCountIndex배열에 추가
        }
}

if(maxCountIndex.length === 1 ) {
    console.log(maxCountIndex[0])
} else { //maxCountIndex의 길이가 1이 아니라면 최대값을 가진 인덱스가 많다는 것 or 없는 것
    console.log('?');
}