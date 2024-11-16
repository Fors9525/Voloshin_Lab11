function sortWordsAlphabetically(text) {
    const sortedWords = text
        .toLowerCase()                         
        .split(/\s+/)                         
        .sort();                             
    console.log(sortedWords.join(", "));
}

const sampleText = "Some simple text here";
sortWordsAlphabetically(sampleText);
