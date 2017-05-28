/**
 * Created by tania on 28.5.2017 г..
 */
function rounding(input) {
    if (input[1] > 15){
        input[1] = 15;
    }
    console.log(Math.round(input[0]*Math.pow(10,input[1]))/Math.pow(10,input[1]));
}
//rounding([3.1415926535897932384626433832795, 2]);