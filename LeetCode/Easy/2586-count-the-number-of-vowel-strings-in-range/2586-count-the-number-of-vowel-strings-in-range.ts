function vowelStrings(words: string[], left: number, right: number): number {

    const vowelCharacters: string[] = ["a", "e", "i", "o", "u"];
    let count: number = 0;

    words = words.slice(left, right + 1);

    for (const word of words){

        if (vowelCharacters.includes(word[0]) && vowelCharacters.includes(word[word.length - 1])){
            console.log(word)
            console.log(word[0])
            console.log(word[word.length - 1])

            count ++;
        }
       
    }

    return count;




    
};