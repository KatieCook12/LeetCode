function topKFrequent(nums: number[], k: number): number[] {

    let count: Record<string, number> = {};

    for (const num of nums) {
        count[num] = (count[num] ?? 0) + 1;
    }

    return Object.entries(count).sort((a, b) => b[1] - a[1]).map(([word]) => Number(word)).slice(0, k);
};