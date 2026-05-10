function deleteGreatestValue(grid: number[][]): number {

    let deleteGreatestValue: number = 0;

    for (const row of grid) {
        row.sort((a, b) => a - b)
    }

    grid[0].forEach((_, i) => {
        deleteGreatestValue += Math.max(...grid.map(sub => sub[i]));
    })

    return deleteGreatestValue;
};