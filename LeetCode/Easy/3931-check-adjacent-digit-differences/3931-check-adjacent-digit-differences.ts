function isAdjacentDiffAtMostTwo(s: string): boolean {

    const sLength: number = s.length - 1;

    for (let i = 0; i < sLength; i++) {
        if (Math.abs(Number(s[i]) - Number(s[i + 1])) > 2) {
            return false;
        }
    }

    return true;
};