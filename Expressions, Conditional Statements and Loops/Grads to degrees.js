/**
 * Created by tania on 28.5.2017 г..
 */
function gradsToDegrees(grads) {
    let degrees = grads * 0.9;
    if(degrees >= 360){
        degrees = degrees%360;
    }
    // else if (degrees < 0){
    //     degrees = Math.abs(degrees)+360%360;
    // }
    console.log(degrees);
}

//gradsToDegrees(400);