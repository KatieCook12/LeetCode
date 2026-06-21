function minimumAbsDifference(arr: number[]): number[][] {

    arr.sort((a, b) => a - b);

    let minimumDifference: number = Infinity;
    const minimumAbsoluteDifferencePairs: number[][] = [];
    const arrLength: number = arr.length - 1;

    for (let i = 0; i < arrLength; i++) {
        const distance: number = Math.abs(arr[i + 1] - arr[i]);
        if (distance < minimumDifference) {
            minimumDifference = distance;
        }
    }

    for (let i = 0; i < arrLength; i++) {
        if (Math.abs(arr[i + 1] - arr[i]) === minimumDifference) {
            minimumAbsoluteDifferencePairs.push([arr[i], arr[i + 1]])
        }
    }

    return minimumAbsoluteDifferencePairs;
};