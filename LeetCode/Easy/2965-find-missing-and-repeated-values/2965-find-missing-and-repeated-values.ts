function findMissingAndRepeatedValues(grid: number[][]): number[] {
    
    const n = grid.length;
    const freqMap = new Map<number, number>();

    let repeated = -1;
    let missing = -1;

    for (const row of grid) {

        for (const value of row) {

            const count = (freqMap.get(value) || 0) + 1;
            freqMap.set(value, count);

            if (count === 2) {
                repeated = value;
            }

        }

    }

    for (let i = 1; i <= n * n; i++) {

        if (!freqMap.has(i)) {
            missing = i;
            break;
        }

    }

    return [repeated, missing];
}
