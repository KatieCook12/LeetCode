function divideArray(nums: number[]): boolean {

    if (nums.length % 2 != 0) {
        return false;
    }

    let count: Record<string, number> = {};

    for (const num of nums) {
        count[num] = (count[num] ?? 0) + 1;
    }

    return Object.values(count).every(num => num % 2 === 0);
};