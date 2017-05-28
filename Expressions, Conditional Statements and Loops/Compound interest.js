/**
 * Created by tania on 28.5.2017 г..
 */
function compound(input) {
    let interest = input[0] * (Math.pow(1 + (input[1]/100)/(12/input[2]),(12/input[2])*input[3]));
    console.log(interest.toFixed(2));
}