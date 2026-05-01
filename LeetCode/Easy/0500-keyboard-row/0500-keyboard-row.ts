function findWords(words: string[]): string[] {


    return [...words.filter(word => /^[qwertyuiopQWERTYYUIOP]+$/i.test(word)), 
    ...words.filter(word => /^[asdfghjklASDFGHJKL]+$/i.test(word)), ...words.filter(word => /^[zxcvbnmZXCVBNM]+$/i.test(word))];


};