function dominantIndex(nums: number[]): number {

    const sortedNums: number[] = [...nums].sort((a, b) => b - a);

    return sortedNums[0] >= (sortedNums[1] * 2) ? nums.indexOf(sortedNums[0]) : -1;
};