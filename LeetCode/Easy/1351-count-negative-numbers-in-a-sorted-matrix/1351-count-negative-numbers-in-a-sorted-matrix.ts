function countNegatives(grid: number[][]): number {

    let count: number = 0;

    for (const numbers of grid) {
        numbers.forEach(num => {
            if (num < 0) {
                count++;
            }
        })
    }

    return count;
};