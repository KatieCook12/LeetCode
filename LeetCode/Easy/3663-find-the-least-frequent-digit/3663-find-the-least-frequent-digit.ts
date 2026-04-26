function getLeastFrequentDigit(n: number): number {
    let count: Record<string, number> = {};

    for (const num of n.toString()) {
        count[num] = (count[num] ?? 0) + 1;
    }

    const sorted: [string, number][] = Object.entries(count)
        .sort((a, b) => a[1] - b[1]);

    return +sorted[0][0];
}