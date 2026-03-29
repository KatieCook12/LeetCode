function stringMatching(words: string[]): string[] {

    const output: string[] = [];
    let index: number = 0;
    const wordLength: number = words.length;

    while (index < words.length) {
        for (const word of words) {
            if (word !== words[index] && word.includes(words[index])) {
                output.push(words[index]);
                break;
            }
        }
        index++;
    }

    return output;
};