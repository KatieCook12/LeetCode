function topKFrequent(nums: number[], k: number): number[] {
    const count: Record<string, number> = {};

    for (const num of nums) {
        count[num] = (count[num] ?? 0) + 1;
    }

    return Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => Number(num));
}