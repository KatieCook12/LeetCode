function concatWithReverse(nums: number[]): number[] {

    const numsLength: number = nums.length - 1;

    for (let i = numsLength; i >= 0; i--) {
        nums.push(nums[i])
    }

    return nums;
};