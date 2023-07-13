const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split('\n').map(Number); //숫자 배열

//풀이
const sum = input.reduce((total, cul) => total + cul, 0); //9명의 난쟁이 키 총합
const fakeSum = sum - 100; //2명의 가짜 난쟁이 키 합
const heights = input.map(Number).sort((a, b) => a - b); //오름차순으로 7명의 난쟁이 키 정렬

let check1, check2;
for (let i = 0; i < 8; i++) { //0~8, 8명 비교
    for (let j = i + 1; j < 9; j++) { // 1~9, 8명 배교
        if (heights[i] + heights[j] === fakeSum) { //두 난쟁이의 키의 합이 fakeSum이라면 두 난쟁이가 가짜 난쟁이!!
            [check1, check2] = [i, j]; //두 난쟁이의 인덱스 번호를 check에 저장
        }
    }
}

for (let i = 0; i < 9; i++) {
    if (i !== check1 && i !== check2) { //해당 난쟁이가 있는 인덱스 번호를 제외하고 배열 출력
        console.log(heights[i]);
    }
}




// let height = [];
// let total = 0;
//
//
// while(true) {
//     total = 0;
//     for (let i = 0; i < 7; i++) {
//         let moveheight = input.splice([Math.floor(Math.random() * input.length)], 1)[0];
//         height.push(moveheight);
//     }
//
//     for (let j=0; j<7; j++) {
//         total += height[j];
//         if (total === 100) {
//             console.log(height.sort().join("\n"));
//             break;
//         }
//     }
//
//     if (total === 100) {
//         break;
//     }
// }
//
