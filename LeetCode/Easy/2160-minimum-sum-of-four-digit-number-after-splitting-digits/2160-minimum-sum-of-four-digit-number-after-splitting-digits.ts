function minimumSum(num: number): number {

    let [a, b, c, d]: number[] = num.toString().split('').map(Number).sort((x, y) => x - y);
    return 10 * (a + b) + (c + d);

}