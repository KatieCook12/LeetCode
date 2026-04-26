function numberOfPairs(nums: number[]): number[] {

    let maximumNumberOfPairs: number[] = [0, 0];
    const pairCount: Record<string, number> = {};

    for (const num of nums) {
        pairCount[num] = (pairCount[num] ?? 0) + 1;
    }

    Object.values(pairCount).forEach(count => {
        maximumNumberOfPairs[0] += Math.floor(count / 2);
        maximumNumberOfPairs[1] += count % 2;
    });

    return maximumNumberOfPairs;
};