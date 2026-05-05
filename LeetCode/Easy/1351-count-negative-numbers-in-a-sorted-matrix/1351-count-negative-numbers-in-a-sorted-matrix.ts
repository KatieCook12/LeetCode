function countNegatives(grid: number[][]): number {

    let count: number = 0;

    for (const numbers of grid) {
        count += numbers.filter(num => num < 0).length;
    }

    return count;
};