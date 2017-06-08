function solve(input) {
    let result = input.split(' ');
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i][0].toUpperCase() + result[i].substring(1).toLowerCase()
    }
    return result.join(' ');
}

//console.log(solve('Capitalize these words'));