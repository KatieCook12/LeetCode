function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map<number, number>();
    const numsLength = nums.length;

    for (let i = 0; i < numsLength; i++) {
        const missingNum = target - nums[i];

        if (hashMap.has(missingNum)) {
            return [hashMap.get(missingNum)!, i];
        }

        hashMap.set(nums[i], i);
    }

    return [];
}
