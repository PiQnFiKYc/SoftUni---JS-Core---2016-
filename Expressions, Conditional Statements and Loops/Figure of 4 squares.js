/**
 * Created by tania on 29.5.2017 г..
 */
function solve(n) {
    let dash =n - 2;
    let spaces = n - 2;
    if(n == 2) {
        console.log("+" + '-'.repeat(dash) + "+" + '-'.repeat(dash) + "+");
    }else {
        console.log("+" + '-'.repeat(dash) + "+" + '-'.repeat(dash) + "+");
        if (n % 2 == 0) {
            for (let i = 1; i <= n / 2 - 2; i++) {
                console.log("|" + ' '.repeat(dash) + "|" + ' '.repeat(dash) + "|");
            }
            console.log("+" + '-'.repeat(dash) + "+" + '-'.repeat(dash) + "+");
            for (let i = 1; i <= n / 2 - 2; i++) {
                console.log("|" + ' '.repeat(dash) + "|" + ' '.repeat(dash) + "|");
            }
            console.log("+" + '-'.repeat(dash) + "+" + '-'.repeat(dash) + "+");
        }
        else {
            for (let i = 1; i <= n / 2 - 1; i++) {
                console.log("|" + ' '.repeat(dash) + "|" + ' '.repeat(dash) + "|");
            }
            console.log("+" + '-'.repeat(dash) + "+" + '-'.repeat(dash) + "+");
            for (let i = 1; i <= n / 2 - 1; i++) {
                console.log("|" + ' '.repeat(dash) + "|" + ' '.repeat(dash) + "|");
            }
            console.log("+" + '-'.repeat(dash) + "+" + '-'.repeat(dash) + "+");
        }
    }
}

//solve(7);