function minimumAbsDifference(arr: number[]): number[][] {

    arr.sort((a, b) => a - b);

    let minimumDifference: number = Infinity;
    const minimumAbsoluteDifferencePairs: number[][] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i + 1] - arr[i]) < minimumDifference) {
            minimumDifference = Math.abs(arr[i + 1] - arr[i]);
        }
    }

    for (let i = 0; i < arr.length - 1; i++){
        if (Math.abs(arr[i + 1] - arr[i]) === minimumDifference){
            minimumAbsoluteDifferencePairs.push([arr[i], arr[i + 1]])
        }
    }

    return minimumAbsoluteDifferencePairs;
};