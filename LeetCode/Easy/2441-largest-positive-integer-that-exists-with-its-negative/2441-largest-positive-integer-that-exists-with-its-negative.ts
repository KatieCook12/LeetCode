function findMaxK(nums: number[]): number {

    const seen: Set<number> = new Set(nums);
    const pairs: number[] = [];

    for (const num of seen) {
        if (num > 0 && seen.has(-num)) {
            pairs.push(num);
        }
    }

    return pairs.length === 0 ? -1 : Math.max(...pairs);
};