function findTheDifference(s: string, t: string): string {

    let findDifference: number = 0;

    for (const ch of s) {
        findDifference ^= ch.charCodeAt(0);
    }

    for (const ch of t) {
        findDifference ^= ch.charCodeAt(0);
    }

    return String.fromCharCode(findDifference);
};