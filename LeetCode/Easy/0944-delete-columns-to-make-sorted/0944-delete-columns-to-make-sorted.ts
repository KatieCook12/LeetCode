function minDeletionSize(strs: string[]): number {

    let count: number = 0;

    const cols: number = strs[0].length;

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < strs.length - 1; row++) {
            if (strs[row][col] > strs[row + 1][col]) {
                count++;
                break;
            }
        }
    }

    return count;
}