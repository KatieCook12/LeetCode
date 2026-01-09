function findPermutationDifference(s: string, t: string): number {

    let permutationDifference: number = 0;
    const sLength: number = s.length;

    for (let i = 0; i < sLength; i++) {

        permutationDifference += Math.abs(i - t.indexOf(s[i]));

    }

    return permutationDifference;
};