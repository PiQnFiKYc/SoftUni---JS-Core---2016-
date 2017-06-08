function stringSplit(input,delimeter) {
    let result = input.split(delimeter);
    console.log(result.join('\n'));
}

//stringSplit('One-Two-Three-Four-Five', '-');