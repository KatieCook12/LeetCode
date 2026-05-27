function isAdjacentDiffAtMostTwo(s: string): boolean {

    const sLength: number = s.length - 1;

    for (let i = 0; i < sLength; i++) {
        if (Math.abs(+s[i] - +s[i + 1]) > 2) {
            return false;
        }
    }

    return true;
};