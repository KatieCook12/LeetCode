function numberGame(nums: number[]): number[] {

    nums.sort((a, b) => a - b);
    const numsLength: number = nums.length;

    for (let i = 0; i < numsLength; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }

    return nums;
};
