function countConsistentStrings(allowed: string, words: string[]): number {

    const allowedSet = new Set(allowed);

    let count: number = 0;

    for (const word of words) {
        if (isAllowed(word)) {
            count++;
        }
    }

    function isAllowed(word: string): boolean {
        for (const c of word) {
            if (!allowedSet.has(c)) {
                return false;
            }

        } return true;
    }

    return count;

};