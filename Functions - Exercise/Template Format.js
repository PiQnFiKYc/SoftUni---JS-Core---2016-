function solve(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for (let i = 0; i < input.length; i+=2) {
        let question = input[i];
        let answer = input[i+1];
        tempate(question,answer);
    }
    console.log('</quiz>');


    function tempate(question,answer) {
        console.log(` <question> \n     ${question} \n </question> \n <answer> \n     ${answer} \n </answer> `);
    }
}

//solve(["Dry ice is a frozen form of which gas?","Carbon Dioxide","What is the brightest star in the night sky?", "Sirius"]);