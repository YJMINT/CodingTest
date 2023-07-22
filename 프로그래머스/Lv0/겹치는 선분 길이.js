function solution(lines) {
    let count = new Array(201).fill(0);

    for (let n = 0; n < lines.length; n++) {
        for (let i = lines[n][0] + 100; i < lines[n][1] + 100; i++) {
            count[i] += 1;
        }
    }

    let answer = 0;
    for (let min = 0; min < count.length; min++) {
        if (count[min] > 1) { //겹치는 선분이라면
            answer++;
        }
    }

    return answer;
}