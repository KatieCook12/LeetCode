function generate(numRows: number): number[][] {

    const pascalsTriangle: number[][] = [[1]];
    let count: number = numRows;

    while (count > 1) {

        const lastRow: number[] = pascalsTriangle[pascalsTriangle.length - 1];
        const nextRow: number[] = [1];

        for (let i = 0; i < lastRow.length - 1; i++) {
            nextRow.push(lastRow[i] + lastRow[i + 1]);
        }

        nextRow.push(1)
        pascalsTriangle.push(nextRow)
        count--;
    }

    return pascalsTriangle;
};