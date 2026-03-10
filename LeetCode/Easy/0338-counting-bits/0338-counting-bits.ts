function countBits(n: number): number[] {
    const countingBitsArray: number[] = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        countingBitsArray[i] = countingBitsArray[i & (i - 1)] + 1;
    }

    return countingBitsArray;
}