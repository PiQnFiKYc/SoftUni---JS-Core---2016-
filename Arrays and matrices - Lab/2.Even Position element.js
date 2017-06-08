function solve(input) {
    let str = '';
    for (let i = 0; i < input.length; i+=2) {
        str+=input[i] + ' ';
    }
    return str;
}

//console.log(solve(['20', '30', '40']));