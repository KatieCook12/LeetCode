function isStrictlyPalindromic(n: number): boolean {

    const nLength: number = n - 2;

    for (let i = 2; i <= nLength; i++) {
        if (n.toString(i).split("") != n.toString(i).split("").reverse()) {
            return false;
        }
    }

    return true;
};