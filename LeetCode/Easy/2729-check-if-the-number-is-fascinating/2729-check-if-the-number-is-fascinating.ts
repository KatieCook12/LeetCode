function isFascinating(n: number): boolean {
    const s = '' + n + (n * 2) + (n * 3);
    if (s.length !== 9) return false;

    const seen = new Set(s);
    if (seen.has('0') || seen.size !== 9) return false;

    for (let i = 1; i <= 9; i++) {
        if (!seen.has(String(i))) return false;
    }
    return true;
}
