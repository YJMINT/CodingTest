const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('input.txt').toString().trim();
// 풀이
    const N = Number(input);
    let result = [];

    for (let i = 1; i <= N; i++) {
        let M = String(i);

        //M 자리수를 숫자배열에 저장
        let digitArr = M.split("").map(x => Number(x));

        let sum = 0;

        for (let j = 0; j < digitArr.length; j++) {
            // 자연수 M의 각 자릿수의 합
            sum += digitArr[j];
        }

        //각 자리수 더한 값 sum + 분해값 M
        sum += Number(M);

        if (sum === N) {
            result.push(M);
        }
    }

    if (result.length === 0) {
        console.log(0);
    } else {
        console.log(Math.min(...result));
    }