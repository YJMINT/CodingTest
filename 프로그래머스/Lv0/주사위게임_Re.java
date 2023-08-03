import java.util.*;

class Solution {
    public int solution(int a, int b, int c, int d) {
        int answer = 0;
        int[] dice = {a,b,c,d};
        Arrays.sort(dice);

        //주사위 4개가 동일할 때
        if (dice[0] == dice[1] && dice[1] == dice[2] && dice[2] == dice[3]) {
            answer = 1111 * dice[0];

            //주사위 3개가 동일할 때
        } else if (dice[0] == dice[1] && dice[1] == dice[2])  {
            answer = (dice[0] * 10 + dice[3]) * (dice[0] * 10 + dice[3]);
        } else if (dice[1] == dice[2] && dice[2] == dice[3]) {
            answer = (dice[1] * 10 + dice[0]) * (dice[1] * 10 + dice[0]);
        } else if (dice[0] == dice[1] && dice[2] == dice[3])  {
            answer = (dice[0] + dice[2]) * Math.abs(dice[0] - dice[2]);

            //주사위 2개가 동일할 때
        } else if (dice[0] == dice[1]) {
            answer = dice[2] * dice[3];
        } else if ( dice[1] == dice[2] ) {
            answer = dice[0] * dice[3];
        } else if ( dice[2] == dice[3] ) {
            answer = dice[0] * dice[1];

            //주사위가 모두 다를 때
        } else {
            answer = dice[0];
        }

        return answer;
    }
}