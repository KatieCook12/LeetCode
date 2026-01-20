function maxFrequencyElements(nums: number[]): number {
    
    const count: Record<number, number> = {};
    let maxFreq: number = 0;

    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
        maxFreq = Math.max(maxFreq, count[n]);
    }

    let total: number = 0;

    for (const freq of Object.values(count)) {
        if (freq === maxFreq) {
            total += freq;
        }
    }

    return total;

}
