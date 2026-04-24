function countWords(words1: string[], words2: string[]): number {

    let word1Count = {};
    let word2Count = {};
    let count: number = 0;

    words1.forEach(element => {
        if (word1Count[element] === undefined || word1Count[element] <= 1) {
            word1Count[element] = (word1Count[element] ?? 0) + 1;
        }
    });

    words2.forEach(element => {
        if (word2Count[element] === undefined || word2Count[element] <= 1) {
            word2Count[element] = (word2Count[element] ?? 0) + 1;
        }
    });

    Object.keys(word1Count).forEach(key => {
        if (word1Count[key] === 1 && word2Count[key] === 1) {
            count++;
        }
    });

    return count;

};