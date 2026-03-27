function countElements(nums: number[]): number {

    let count: number = 0;

    const min: number = Math.min(...nums);
    const max: number = Math.max(...nums);

    for (const num of nums) {
        if (num !== min && num !== max) {
            count++;
        }
    }

    return count;
};