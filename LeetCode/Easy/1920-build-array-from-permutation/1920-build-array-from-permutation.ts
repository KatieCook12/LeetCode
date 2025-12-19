function buildArray(nums: number[]): number[] {

    const output: number[] = [];
    const numsLength: number = nums.length;

    for (let i = 0; i < numsLength; i++) {
        output.push(nums[nums[i]])
    }

    return output;

};