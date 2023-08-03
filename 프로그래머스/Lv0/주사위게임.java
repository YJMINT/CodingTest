class Solution {
    public int solution(int a, int b, int c, int d) {
        int answer = 0;

        if (a == b && b == c && c == d) {
            answer = 1111 * a;
        }  else if ((a==b && b==c) || (a==b && b==d) || (a==c && c==d) || (b==c && c==d)) {
            if (a==b && b==c) {
                answer = (10 * a + d) * (10 * a + d);
            } else if (a==b && b==d) {
                answer = (10 * a + c) * (10 * a + c);
            } else if (a==c && c==d) {
                answer = (10 * a + b) * (10 * a + b);
            } else if (b==c && c==d) {
                answer = (10 * b + a) * (10 * b + a);
            }
        } else if ((a==b && c==d) || (a==c && b==d) || (a==d && b==c) || (b==c && a==d)) {
            if ((a==b && c==d) || (b==c && a==d)) {
                answer = (a+c)*Math.abs(a-c);
            } else if ((a==c && b==d) || (a==d && b==c)) {
                answer = (a+b)*Math.abs(a-b);
            }
        } else if (a==b || b==c || a==c || a==d || b==d || c==d) {
            if ( a==b ) {
                answer = c*d;
            } else if ( b==c ) {
                answer = a*d;
            } else if ( a==c ) {
                answer = b * d;
            } else if (a==d) {
                answer = b*c;
            } else if (b==d) {
                answer = a*c;
            } else if (c==d) {
                answer = a*b;
            }
        } else {
            int ka, kb = 0;
            ka = a > b ? b : a;
            kb = c > d ? d : c;
            answer = ka > kb ? kb : ka;
        }

        return answer;
    }
}