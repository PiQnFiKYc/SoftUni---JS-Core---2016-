function solve(text) {
    let result = [];
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let names = text.match(regex);
    for(name of names){
        let sad = name.split('');
        sad.shift();
       name = sad.join(``);
        result.push(name);
    }

    //console.log(names);

    console.log(result.join(','));
}

//solve(`The _id and _age variables are both integers.`);