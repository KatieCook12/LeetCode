function countElements(nums: number[]): number {

    let count: number = 0;

    for (const num of nums) {
        if (num == Math.min(...nums) || num == Math.max(...nums)) {
            count--;
        }
        count++;
    }

    return count;
};