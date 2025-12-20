function shuffle(nums: number[], n: number): number[] {

    const shuffledArray: number[] = [];

    for (let i = 0; i < n; i++) {
        shuffledArray.push(nums[i]);
        shuffledArray.push(nums[i + n]);
    }

    return shuffledArray;

};