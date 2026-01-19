function threeConsecutiveOdds(arr: number[]): boolean {

    let count: number = 0;
    const arrLength: number = arr.length;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 != 0) {
            count++;
            if (count === 3) {
                return true;
            }
        }
        else {
            count = 0;
        }

    }

    return false;
};