function rowAndMaximumOnes(mat: number[][]): number[] {
    let index = 0;
    let count = 0;

    for (let i = 0; i < mat.length; i++) {
        let currentCount = 0;

        for (const num of mat[i]) {
            if (num === 1) currentCount++;
        }

        if (currentCount > count) {
            count = currentCount;
            index = i;
        }
    }

    return [index, count];
}