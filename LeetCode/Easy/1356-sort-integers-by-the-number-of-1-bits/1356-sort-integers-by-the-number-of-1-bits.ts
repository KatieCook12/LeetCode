function sortByBits(arr: number[]): number[] {

    return arr.sort((a, b) => {
        const countA: number = a.toString(2).replace(/0/g, "").length;
        const countB: number = b.toString(2).replace(/0/g, "").length;
        return countA - countB || a - b;
    });
}