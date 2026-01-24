function maxKDistinct(nums: number[], k: number): number[] {

    const uniqueNums = new Set<number>(nums);

    return [...uniqueNums].sort((a, b) => b - a).slice(0, k);

};