function countBits(n: number): number[] {
    const countingBitsArray: number[] = [];

    for (let i=0; i <= n; i++){
        countingBitsArray.push(i.toString(2).replace(/0/g, "").length)
    }

    return countingBitsArray;
}