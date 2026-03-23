function countPrefixes(words: string[], s: string): number {

    let count: number = 0;

    for (const word of words) {
        if (s.startsWith(word)) {
            count++;
        }
    }

    return count;
}