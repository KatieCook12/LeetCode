function numberGame(nums: number[]): number[] {

    nums.sort((a, b) => a - b)

    let aliceIndex: number = 0;
    let bobIndex: number = 1;

    while (bobIndex < nums.length) {
        const currentBobNumber: number = nums[bobIndex];
        const currentAliceNumber: number = nums[aliceIndex];

        nums[bobIndex] = currentAliceNumber;
        nums[aliceIndex] = currentBobNumber;

        aliceIndex += 2;
        bobIndex += 2;
    }

    return nums;
};
