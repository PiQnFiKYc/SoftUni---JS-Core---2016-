function findOccurrences(text, word) {
    let counter=0;
    let regex= new RegExp(word, 'gi');
    let match= regex.exec(text);
    while (match){
        counter++;
        match=regex.exec(text);
    }
    console.log(counter);
}

findOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there');