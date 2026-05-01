function findWords(words: string[]): string[] {

    const resultFirstRow = words.filter(word => /^[qwertyuiopQWERTYYUIOP]+$/i.test(word));
    const resultSecondRow = words.filter(word => /^[asdfghjklASDFGHJKL]+$/i.test(word));
    const resultThirdRow = words.filter(word => /^[zxcvbnmZXCVBNM]+$/i.test(word));

    return [...resultFirstRow, ...resultSecondRow, ...resultThirdRow];


};