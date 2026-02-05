function numOfStrings(patterns: string[], word: string): number {

    let count: number = 0;

    for (const string of patterns) {

        if (word.includes(string)) {
            count++;
        }

    }

    return count;

};