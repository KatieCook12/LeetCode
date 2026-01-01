function isFascinating(n: number): boolean {
    const concat: string = ('' + n + n * 2 + n * 3)
        .split('')
        .sort((a, b) => Number(a) - Number(b))
        .join('');

    if (concat.length !== 9) return false;

    for (let i = 1; i <= 9; i++) {
        if (concat[i - 1] !== String(i)) return false;
    }
    return true;
}
