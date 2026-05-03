function maxProduct(nums: number[]): number {

    return nums
        .sort((a, b) => a - b)
        .slice(-2)
        .reduce((acc, num) => acc * (num - 1), 1);
};