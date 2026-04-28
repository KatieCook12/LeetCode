function findWordsContaining(words: string[], x: string): number[] {

    const containingCharacters: number[] = [];

    for (const [index, word] of words.entries()) {
        if (word.includes(x)) {
            containingCharacters.push(index);
        }
    }

    return containingCharacters;
};