const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

// 풀이
const n = +(input[0]); //스위치 수
let swit = input[1].split(' ').map(Number); // 스위치 상태
const studentsCount = +(input[2]); // 학생 수

for (let s = 0; s < studentsCount; s++) { //학생 수만큼 학생 정보 저장
    const [gender, number] = input[s + 3].split(" ").map(Number);

    if (gender === 1) { // 남학생이라면
        for (let i = number; i <= n; i += number) {
            swit[i - 1] = swit[i - 1] === 0 ? 1 : 0;
        }
    } else if (gender === 2) {//여학생이라면
        let left = number -1;
        let right = number -1;

        while (left >0 && right < n-1 && swit[left-1]===swit[right+1]) {
            //left가 0보다 크고, right가 스위치 개수보다 작고, 주어진 스위치에서 좌우로 하나씩 움직인 스위치의 상태가 같다면
            left--;
            right++;
        }

        for (let j = left; j<=right; j++) {
            swit[j] = swit[j] === 0 ? 1 : 0;
        }
    }
}

// 출력 형식에 맞추기
let output = "";
for (let i = 0; i < swit.length; i++) {
    if (i > 0 && i % 20 === 0) {
        output += "\n";
    }
    output += swit[i] + " ";
}
console.log(output.trim());







