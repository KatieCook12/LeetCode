function targetIndices(nums: number[], target: number): number[] {

    nums.sort((a, b) => a - b);

    const targetedIndices: number[] = [];

    nums.forEach((num, index) => {
        if (num === target) {
            targetedIndices.push(index);
        }
    });

    return targetedIndices;
};