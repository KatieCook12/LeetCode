function findTheDifference(s: string, t: string): string {

    let findDifference: number = 0;

    for (let char of s) {
        findDifference ^= char.charCodeAt(0);
    }

    for (let char of t) {
        findDifference ^= char.charCodeAt(0);
    }

    return String.fromCharCode(findDifference);
};