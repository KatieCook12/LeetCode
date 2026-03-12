function countPrimeSetBits(left: number, right: number): number {
    let total: number = 0;

    for (let n = left; n <= right; n++) {
        let x: number = n;
        let bits: number = 0;

        while (x !== 0) {
            x &= x - 1;
            bits++;
        }

        if ((1 << bits) & 665772) {
            total++;
        }
    }

    return total;
}