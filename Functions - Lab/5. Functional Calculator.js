/**
 *
 * @param num1 - first number{int}
 * @param num2 - second number {int}
 * @param operator {string}
 * @returns value of operation{int}
 */
function functionalCalculator(num1,num2,operator) {
    switch(operator){
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '/': return num1/num2;
        case '*': return num1*num2;
    }
}

//console.log(functionalCalculator(2, 4, '+'));