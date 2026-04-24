function numIdenticalPairs(nums: number[]): number {

    let count: Record<string, number> = {};

    for (const num of nums) {
        count[num] = (count[num] ?? 0) + 1;
    }

    let result: number = 0;

    Object.values(count).forEach(ele => result += (ele * (ele - 1)) / 2);

    return result;
};