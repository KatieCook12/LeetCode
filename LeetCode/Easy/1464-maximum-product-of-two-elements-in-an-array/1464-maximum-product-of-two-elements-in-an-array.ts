function maxProduct(nums: number[]): number {

    const result: number = nums
        .sort((a, b) => a - b)
        .slice(-2)
        .reduce((acc, num) => acc * (num - 1), 1);

    return result;
};