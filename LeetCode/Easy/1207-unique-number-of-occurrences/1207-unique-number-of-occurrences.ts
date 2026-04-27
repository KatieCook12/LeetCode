function uniqueOccurrences(arr: number[]): boolean {

    const countedOccurrences: Record<string, number> = {};

    for (const num of arr) {
        countedOccurrences[num] = (countedOccurrences[num] ?? 0) + 1;
    }

    const values: number[] = Object.values(countedOccurrences);

    return new Set(values).size === values.length;
};