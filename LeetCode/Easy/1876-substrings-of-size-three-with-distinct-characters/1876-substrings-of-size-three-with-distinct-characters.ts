function countGoodSubstrings(s: string): number {

    let count: number = 0;
    let sLength: number = s.length - 2;

    for (let i = 0; i < sLength; i++) {
        if (s[i] !== s[i + 1] &&
            s[i] !== s[i + 2] &&
            s[i + 1] !== s[i + 2]) {
            count++;
        }
    }

    return count;

};