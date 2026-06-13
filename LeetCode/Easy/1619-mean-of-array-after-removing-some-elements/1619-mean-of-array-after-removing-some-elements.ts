function trimMean(arr: number[]): number {

    arr.sort((a, b) => a - b);

    const fivePercent: number = arr.length / 20;

    const arrSliced: number[] = arr.slice(fivePercent, arr.length - fivePercent);

    return arrSliced.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arrSliced.length
};