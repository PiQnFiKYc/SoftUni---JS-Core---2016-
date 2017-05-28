/**
 * Created by tania on 28.5.2017 г..
 */
function distance(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let z1 = Number(input[2]);
    let x2 = Number(input[3]);
    let y2 = Number(input[4]);
    let z2 = Number(input[5]);
    let distance = Math.sqrt(Math.abs(Math.pow((x1-x2),2) + Math.pow((y1-y2),2)+Math.pow((z1-z2),2)));
    console.log(distance);
}

//distance([1,1,0,5,4,0]);