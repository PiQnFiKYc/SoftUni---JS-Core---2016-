function solve(input) {
    let num = Number(input[0]);
    let op1 = input[1];
    let op2 = input[2];
    let op3 = input[3];
    let op4 = input[4];
    let op5 = input[5];

    for (let i = 1; i < input.length ; i++) {
        switch(input[i]){
            case 'chop':
                console.log(operation(num, (num) => num / 2));
                break;
            case 'dice':
                console.log(operation(num, (num) => Math.sqrt(num)));
                break;
            case 'spice':
                console.log(operation(num, (num) => num + 1));
                break;
            case 'bake':
                console.log(operation(num, (num) => num * 3));
                break;
            case 'fillet':
                console.log(operation(num, (num) => num - (20 * num) / 100));
                break;
        }

    }

    function operation(input,func) {

        num = func(num);

        return num;
    }
}

//solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);