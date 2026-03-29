function stringMatching(words: string[]): string[] {

    const output: string[] = [];
    const wordLength: number = words.length;

    for (let i = 0; i < wordLength; i++) {
        for (let j = 0; j < wordLength; j++) {
            if (i !== j && words[j].includes(words[i])) {
                output.push(words[i]);
                break;
            }
        }

    }

    return output;
};