function countGoodSubstrings(s: string): number {

    let count: number = 0;
    let sLength: number = s.length - 2;

    for (let i = 0; i < sLength; i++) {
        if (new Set([s[i], s[i + 1], s[i + 2]]).size == 3) {
            count++;
        }
    }

    return count;

};