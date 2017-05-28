/**
 * Created by tania on 28.5.2017 г..
 */
function distance(input){
    "use strict";
    let v1 = Number(input[0]);
    let v2 = Number(input[1]);
    let period = Number(input[2]);
    v1 = v1 * 1000 / 3600;
    v2 = v2 * 1000 / 3600;
    let S1 = v1 * period;
    let S2 = v2 * period;
    let min = Math.min(S1,S2);
    let max = Math.max(S1,S2);
    let delta = Math.abs(max - min);
    console.log(delta);
}

//distance([5,-5,40]);