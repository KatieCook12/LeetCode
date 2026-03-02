function removeTrailingZeros(num: string): string {

    let n: number = +num;

    while (n % 10 === 0 && n !== 0) {
        n /= 10;
    }

    return n.toString();
};