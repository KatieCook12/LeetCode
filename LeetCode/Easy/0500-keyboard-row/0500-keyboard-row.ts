function findWords(words: string[]): string[] {

    const firstRowRegex = /^[qwertyuiopQWERTYYUIOP]+$/i;
    const secondRowRegex = /^[asdfghjklASDFGHJKL]+$/i;
    const thirdRowRegex = /^[zxcvbnmZXCVBNM]+$/i;

    const resultFirstRow = words.filter(word => firstRowRegex.test(word));
    const resultSecondRow = words.filter(word => secondRowRegex.test(word));
    const resultThirdRow = words.filter(word => thirdRowRegex.test(word));

    return [...resultFirstRow, ...resultSecondRow, ...resultThirdRow];


};