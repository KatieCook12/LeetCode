function countPrimeSetBits(left: number, right: number): number {

    const primeNumbers: number[] = [2, 3, 5, 7, 11, 13, 17, 19];
    let count: number = 0;

    for (let i = left; i <= right; i++) {

        if (primeNumbers.includes(i.toString(2).replace(/0/g, "").length)) {
            count++;
        }

    }

    return count;

};