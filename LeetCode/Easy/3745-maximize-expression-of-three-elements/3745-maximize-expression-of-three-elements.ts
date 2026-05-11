function maximizeExpressionOfThree(nums: number[]): number {

    nums.sort((a, b) => a - b);

    const numLength: number = nums.length;

    return (nums[numLength - 1] + nums[numLength - 2]) - nums[0];
};