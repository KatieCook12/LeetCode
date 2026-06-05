function dominantIndex(nums: number[]): number {

    const sortedNums: number[] = [...nums].sort((a, b) => b - a);

    if (sortedNums[0] >= (sortedNums[1] * 2)) {
        return nums.indexOf(sortedNums[0])
    } else {
        return -1;
    }
};