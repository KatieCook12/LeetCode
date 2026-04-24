function countWords(words1: string[], words2: string[]): number {

    let word1Count: Record<string, number> = {};
    let word2Count: Record<string, number> = {};
    let count: number = 0;

    function arrayOccurrenceCounter(array: string[], hashMapCounter: Record<string, number>): void {
        for (const word of array) {
            hashMapCounter[word] = Math.min((hashMapCounter[word] ?? 0) + 1, 2);
        }
    }

    arrayOccurrenceCounter(words1, word1Count);
    arrayOccurrenceCounter(words2, word2Count);

    Object.keys(word1Count).forEach(key => {
        if (word1Count[key] === 1 && word2Count[key] === 1) {
            count++;
        }
    });

    return count;
};