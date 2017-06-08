function secretData(input) {
    let namesRegex = /\*[A-Z][a-zA-Z]*(?=\s|$)/g;
    let phonesRegex = /\+([0-9]|-){10}(?=\s|$)/g;
    let idRegex = /![a-zA-Z0-9]+(?=\s|$)/g;
    let baseNameRegex = /_[a-zA-Z0-9]+(?=\s|$)/g;
    let secretData = [];

    function replace(line, regex) {
        let matches = line.match(regex);
        if(matches!==null){
            for (let match of matches) {
                line = line.replace(match, '|'.repeat(match.length));
            }
        }
        return line;
    }

    for (let line of input) {
        line = replace(line, namesRegex);
        line = replace(line, phonesRegex);
        line = replace(line, idRegex);
        line = replace(line, baseNameRegex);
        secretData.push(line);
    }
    console.log(secretData.join('\n'));
}
