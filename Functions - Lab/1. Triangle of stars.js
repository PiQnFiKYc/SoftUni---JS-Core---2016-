/**
 * Created by tania on 29.5.2017 г..
 */
function printTriangle(count){
    "use strict";
    for(let i = 1; i<=count; i++){
        printStars(i);
    }
    for(let i = count - 1; i >=0; i--){
        printStars(i);
    }

    function printStars(n) {
        console.log('*'.repeat(n));
    }
}

//printTriangle(2);