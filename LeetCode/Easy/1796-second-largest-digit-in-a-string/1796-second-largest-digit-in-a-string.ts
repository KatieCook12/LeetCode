function secondHighest(s: string): number {

    const numbers: number[] = (s.match(/\d/g) || []).map(Number);
    const unique: number[] = [...new Set(numbers)].sort((a, b) => a - b);

    if (unique.length < 2) {
        return -1;
    }

    return unique[unique.length - 2];
}