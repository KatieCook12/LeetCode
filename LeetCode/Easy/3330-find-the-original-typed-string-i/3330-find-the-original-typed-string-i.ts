function possibleStringCount(word: string): number {

    let count: number = 0;
    let currentChar: string = word[0];

    for (const ch of word) {
        ch === currentChar ? count++ : currentChar = ch;
    }

    return count;
};