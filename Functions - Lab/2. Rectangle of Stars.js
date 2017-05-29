/**
 * Created by tania on 29.5.2017 г..
 */
function printRectangle(count = 5) {
    for(let i = 1 ; i<=count; i++){
        printStars(count);
    }


    function printStars(n) {
        console.log('* '.repeat(n));
    }

}

//printRectangle(8);