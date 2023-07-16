const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('');
let inputBigLetterChange = input.map(v => v.toUpperCase())
const bigLetter = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let count = new Array(26).fill(0);

for (let j=0; j<inputBigLetterChange.length; j++) { //대문자 input값
    for (let i = 0; i<bigLetter.length; i++) { //대문자 배열
        if (bigLetter[i]===(inputBigLetterChange[j])) {
            count[i] += 1;
        }
    }
}

const maxValue = Math.max(...count);

let maxCountIndex = [];

for (let i = 0; i < count.length; i++) {
        if (count[i] === maxValue) {
            maxCountIndex.push(bigLetter[i]);
        }
}

if(maxCountIndex.length === 1 ) {
    console.log(maxCountIndex[0])
} else {
    console.log('?');
}