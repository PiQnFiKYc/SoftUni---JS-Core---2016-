

function aggregateElements(input) {

    console.log(aggregate(input, 0, (a, b) => a + b));
    console.log(aggregate(input, 0, (a, b) => a + 1 / b));
    console.log(aggregate(input, '', (a, b) => a + b));



    function aggregate(arr,start,func) {

        for(let e of input){
            start = func(start,e);
        }
        return start;
    }
}

//aggregateElements([1,2,3]);
