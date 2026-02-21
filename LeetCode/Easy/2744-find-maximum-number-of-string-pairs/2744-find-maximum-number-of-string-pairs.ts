function maximumNumberOfStringPairs(words: string[]): number {

    const wordArray: string[] = [];

    for (let i=0; i < words.length; i++){

        wordArray.push(words[i].split("").sort().join(""))

    }

    return wordArray.length - new Set(wordArray).size;


};