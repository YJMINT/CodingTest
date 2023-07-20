function solution(dots) {
    var answer = 0;

    let ab = (dots[0][1]-dots[1][1]) / (dots[0][0]-dots[1][0]);
    let cd = (dots[2][1]-dots[3][1]) / (dots[2][0]-dots[3][0]);
    let ac = (dots[0][1]-dots[2][1]) / (dots[0][0]-dots[2][0]);
    let bd = (dots[1][1]-dots[3][1]) / (dots[1][0]-dots[3][0]);
    let ad = (dots[0][1]-dots[3][1]) / (dots[0][0]-dots[3][0]);
    let bc = (dots[1][1]-dots[2][1]) / (dots[1][0]-dots[2][0]);

    if (ab - cd === 0 || ac - bd === 0 || ad - bc === 0) {
        answer = 1;
    }

    return answer;
}