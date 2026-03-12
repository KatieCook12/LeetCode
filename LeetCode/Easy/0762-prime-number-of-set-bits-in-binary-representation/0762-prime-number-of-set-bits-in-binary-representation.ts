function countPrimeSetBits(left: number, right: number): number {

    const primes = [2, 3, 5, 7, 11, 13, 17, 19];
    let count = 0;

    for (let n = left; n <= right; n++) {

        let num = n;
        let bits = 0;

        while (num) {
            num = num & (num - 1);
            bits++;
        }

        if (primes.includes(bits)) {
            count++;
        }
    }

    return count;
}