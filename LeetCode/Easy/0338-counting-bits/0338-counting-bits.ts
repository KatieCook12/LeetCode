function countBits(n: number): number[] {

    const bitArray: number[] = [];

    for (let i = 0; i <= n; i++) {
        let count: number = 0;
        i.toString(2).split("").map(Number).forEach(num => count += num);
        bitArray.push(count);
    }

    return bitArray;
};