function rowAndMaximumOnes(mat: number[][]): number[] {
    let index: number = 0;
    let count: number = 0;
    const matLength: number = mat.length;

    for (let i = 0; i < matLength; i++) {
        let currentCount: number = 0;

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