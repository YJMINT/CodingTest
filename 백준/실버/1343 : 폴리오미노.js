const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = input[0];

function solution (n) {
    n = n.replace(/XXXX/g, 'AAAA');
    n = n.replace(/XX/g, 'BB');
    return n.split('').includes('X') ? -1 : n;
}

const result = solution(n);
console.log(result);


// const fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().trim().split('');
//
// for (let j = 0; j < input.length; j++) {
//     if (input[j] === 'X') {
//          input[j] = 'B';
//     }
// }
//
// let count = input.filter(element => 'B' === element).length; // 배열에서 'B' 개수 구하기
// let i=0;
//
// if (count%2 === 0) {
//     while ( i<input.length-3) {
//          let countB =input[i]+input[i+1]+input[i+2]+input[i+3];
//          if (countB.includes('BB')) {
//              console.log(countB);
//              if (countB === 'BBBB') {
//                  input[i] = 'A';
//                  input[i + 1] = 'A';
//                  input[i + 2] = 'A';
//                  input[i + 3] = 'A';
//                  i += 4;
//              }
//              else {
//                  i++;
//              }
//          } else if (countB.includes('..')) {
//              i++;
//          }
//          else {
//              console.log(-1);
//              return;
//          }
//     }
//     console.log(input.join(''));
// }
// else {
//     console.log(-1);
//     return;
// }