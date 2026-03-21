function minDeletionSize(strs: string[]): number {

    let deletions: number = 0;
    const strsColLength: number = strs[0].length;
    const strsRowLength: number = strs.length;

    for (let col = 0; col < strsColLength; col++) {
        for (let row = 1; row < strsRowLength; row++) {
            if (strs[row - 1][col] > strs[row][col]) {
                deletions++;
                break;
            }
        }
    }

    return deletions;
}