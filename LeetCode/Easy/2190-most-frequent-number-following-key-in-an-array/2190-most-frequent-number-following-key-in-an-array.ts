function mostFrequent(nums: number[], key: number): number {

    const numsLength: number = nums.length;
    const counts: Record<number, number> = {};
    let maxCount = 0;
    let result = nums[0];

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] === key) {
            const target = nums[i + 1];
            counts[target] = (counts[target] ?? 0) + 1;

            if (counts[target] > maxCount) {
                maxCount = counts[target];
                result = target;
            }

        }

    }
    
    return result;
    
}
