function getFinalState(nums: number[], k: number, multiplier: number): number[] {

    while (k > 0) {
        const minimumValue: number = Math.min(...nums);
        nums[nums.indexOf(minimumValue)] = minimumValue * multiplier;
        k--;
    }

    return nums;
};