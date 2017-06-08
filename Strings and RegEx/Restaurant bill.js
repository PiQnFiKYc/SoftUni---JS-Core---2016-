function solve(input) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if(i%2==0){
            result.push(input[i]);
        }
        else {
            let price = Number(input[i]);
            sum+=price;
        }

    }
    result = result.join(', ');
    console.log(`You purchased ${result} for a total sum of ${sum}`);
}

//solve(['Cola', '1.35', 'Pancakes', '2.88']);