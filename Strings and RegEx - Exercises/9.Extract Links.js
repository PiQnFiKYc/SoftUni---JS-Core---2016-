function extractLinks(input) { // array of strings
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
    let extractedLinks = [];
    for (let line of input) {
        let matches = line.match(regex);
        if(matches!==null){
            for (let match of matches) {
                extractedLinks.push(match);
            }
        }
    }
    if(extractedLinks.length !== 0){
        console.log(extractedLinks.join('\n'));
    }
}