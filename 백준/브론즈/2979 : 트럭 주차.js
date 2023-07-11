const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split('\n').map(v => v.split(' ').map(Number));

//풀이
const [A, B, C] = input.shift(); //첫번째 개행줄 5, 3, 1을 지운다. 5 3 1은 [A, B, C]에 저장되고, 나머지 input을 출력해보면 5, 3, 1이 지워진 상태로 출력된다.
let time = new Array(101).fill(0); //time을 101까지 만들고 전부 0으로 초기화 시킨다.
let charge = 0; //지불해야 하는 요금
input.forEach(v => { //5 3 1이 지워진 input 배열을 가지고 forEach문을 돌며 구조분해 할당
    const [start, end] = v;
    for (let x = start; x < end; x++) {
        time[x]++;
    }
})

time.forEach(v => { //time 배열을 순회하며 값이 1, 2, 3일 경우를 각각 계산
    switch (v) {
        case 1:
            charge += A;
            break;
        case 2:
            charge += B * 2;
            break;
        case 3:
            charge += C * 3;
            break;
    }
})

console.log(charge);










// const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
// const input = fs.readFileSync('input.txt').toString().trim().split('\n');
//
// // 풀이
// const price = input[0].split(" ").map(Number); //대당 주차 요금
// let state = []; //주차 상태
// for (let i = 1; i<input.length; i++) { //차량 주차 시간
//     const [come, leave] = input[i].split(" ").map(Number);
//
//     for (let j = come; j <= leave; j++) {
//         console.log("state[j]", state[j]);
//         state[j] += 1;
//     }
//     console.log("state", state);
// }
//
//     let charge = 0;
//     for (let index = 0; index < state.length; index++) {
//         if (state[index] === 1) {
//             charge += price[0];
//             console.log("1대", charge);
//         } else if (state[index] === 2) {
//             charge = charge + 2*price[1];
//             console.log("2대", charge);
//         } else if (state[index] === 3) {
//             charge = charge + 3*price[2];
//             console.log("3대", charge);
//         }
//     }
//     console.log(charge);
//
//
