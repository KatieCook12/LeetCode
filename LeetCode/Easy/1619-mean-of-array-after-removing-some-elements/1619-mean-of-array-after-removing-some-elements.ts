function trimMean(arr: number[]): number {

    arr.sort((a, b) => a - b);

    const fivePercent: number = arr.length / 20;

    let sum: number = 0;

    for (let i = fivePercent; i < arr.length - fivePercent; i++) {
        sum += arr[i];
    }

    return sum / (arr.length - (fivePercent * 2));
};