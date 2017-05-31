function solve(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x3 = Number(input[4]);
    let y3 = Number(input[5]);

    let d12 = getDistance(x1,y1,x2,y2);
    let d13 = getDistance(x1,y1,x3,y3);
    let d23 = getDistance(x2,y2,x3,y3);

    if ((d12 <= d13) && (d13 => d23)) {
        let a = d12 + d23;
        console.log('1->2->3: ' + a);
    }
    else if ((d12 <= d23) && (d13 < d23)) {
        let b = d13 + d12;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = d23 + d13;
        console.log('1->3->2: ' + c);
    }

    function getDistance(x1,y1,x2,y2) {
        let distance = Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
        return distance;
    }
}

//solve([-1, -2, 3.5, 0, 0, 2]);