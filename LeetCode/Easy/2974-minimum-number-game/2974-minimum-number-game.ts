function numberGame(nums: number[]): number[] {

    nums.sort((a, b) => a - b);

    const numLength: number = nums.length;
    let aliceIndex: number = 0;
    let bobIndex: number = 1;

    while (bobIndex < numLength) {
        const currentBobNumber: number = nums[bobIndex];
        const currentAliceNumber: number = nums[aliceIndex];

        nums[bobIndex] = currentAliceNumber;
        nums[aliceIndex] = currentBobNumber;

        aliceIndex += 2;
        bobIndex += 2;
    }

    return nums;
};
