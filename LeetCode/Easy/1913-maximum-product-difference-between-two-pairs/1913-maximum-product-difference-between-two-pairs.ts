function maxProductDifference(nums: number[]): number {

    const sorted: number[] = nums.sort((a, b) => a - b);

    const largestNumberSum: number = sorted.slice(nums.length - 2, nums.length).reduce(
        (accumulator, num) => accumulator *= num,
        1,
    );

    const smallestNumberSum: number = sorted.slice(0, 2).reduce(
        (accumulator, num) => accumulator *= num,
        1,
    );

    return largestNumberSum - smallestNumberSum;
};