function solve(input) {
//    input = Math.abs(input);
    let str = input.toString();
    let average = getSumOfNums(str)/str.length;
    if(average > 5 ){
        console.log(str);
    }
    else {
        do{

            str = str + "9";
            average = getSumOfNums(str)/str.length;

        }while(average <= 5);
        console.log(str);
    }
    function getSumOfNums(str) {

        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str.charAt(i), 10);
        }

        return sum;
    }
}

//solve(101);