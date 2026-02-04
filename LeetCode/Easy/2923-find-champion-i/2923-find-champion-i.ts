function findChampion(grid: number[][]): number {

    let prevScore: number = 0;
    let currentScore: number = 0;
    let currentChampion: number = 0;
    const gridLength: number = grid.length;

    for (let i = 0; i < gridLength; i++) {

        for (const n of grid[i]) {
            currentScore += n;
        }

        if (currentScore > prevScore) {
            currentChampion = i;
            prevScore = currentScore;
        }

        currentScore = 0;
    }

    return currentChampion;
}
