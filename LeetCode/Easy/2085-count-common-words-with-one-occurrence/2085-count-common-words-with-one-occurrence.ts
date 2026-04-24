function countWords(words1: string[], words2: string[]): number {
    const count1: Record<string, number> = {};
    const count2: Record<string, number> = {};

    for (const word of words1) {
        count1[word] = (count1[word] ?? 0) + 1;
    }

    for (const word of words2) {
        count2[word] = (count2[word] ?? 0) + 1;
    }

    let result: number = 0;

    for (const word in count1) {
        if (count1[word] === 1 && count2[word] === 1) {
            result++;
        }
    }

    return result;
}