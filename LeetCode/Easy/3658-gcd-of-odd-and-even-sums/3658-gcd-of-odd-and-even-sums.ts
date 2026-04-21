function gcdOfOddEvenSums(n: number): number {

    let sumOdd: number = 0;
    let sumEven: number = 0;

    for (let i = 1; i < n * 2 + 1; i++) {
        i % 2 != 0 ? sumOdd += i : sumEven += i;
    }

    return Math.abs(sumOdd - sumEven);
};