/**
 *
 * @param input {string}
 */
function solve(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    if(Number.isInteger(getDistance(x1, y1, 0, 0))){
        console.log(printOutput(x1, y1, 0, 0)+'valid');
    }
    else  console.log(printOutput(x1, y1, 0, 0)+'invalid');
    if(Number.isInteger(getDistance(x2, y2, 0, 0))){
        console.log(printOutput(x2, y2, 0, 0)+'valid');
    }
    else  console.log(printOutput(x2, y2, 0, 0)+'invalid');
    if(Number.isInteger(getDistance(x1, y1, x2, y2))){
        console.log(printOutput(x1, y1, x2, y2)+'valid');
    }
    else  console.log(printOutput(x1, y1, x2, y2)+'invalid');


    function getDistance(x1,y1,x2,y2) {
        let distance = Math.sqrt(Math.abs(Math.pow((x1-x2),2) + Math.pow((y1-y2),2)));
        return distance;
    }


    function printOutput(x1,y1,x2,y2) {
        let str = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
        return str;
    }

}

solve([2, 1, 1, 1]);
//solve([3, 0, 0, 4]);