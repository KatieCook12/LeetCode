function minimumAbsDifference(arr: number[]): number[][] {

    arr.sort((a, b) => a - b);

    let minimumDifference = Infinity;
    const pairs: number[][] = [];
    const arrLength: number = arr.length - 1;

    for (let i = 0; i < arrLength; i++) {
        const distance = arr[i + 1] - arr[i];

        if (distance < minimumDifference) {
            minimumDifference = distance;
            pairs.length = 0;
            pairs.push([arr[i], arr[i + 1]]);
        } else if (distance === minimumDifference) {
            pairs.push([arr[i], arr[i + 1]]);
        }
    }

    return pairs;
}