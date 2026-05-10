function deleteGreatestValue(grid: number[][]): number {

    for (const row of grid) {
        row.sort((a, b) => a - b)
    }

    return grid[0].reduce((sum, _, i) => {
        return sum + Math.max(...grid.map(sub => sub[i]));
    }, 0);
};