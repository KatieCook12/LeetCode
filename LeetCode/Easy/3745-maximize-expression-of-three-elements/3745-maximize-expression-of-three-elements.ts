function maximizeExpressionOfThree(nums: number[]): number {

    nums.sort((a, b) => a - b);

    const numLength: number = nums.length - 1;

    return (nums[numLength] + nums[numLength - 1]) - nums[0];
};