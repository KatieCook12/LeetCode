function generate(numRows: number): number[][] {

    const pascalsTriangle: number[][] = [[1]];
    let count: number = numRows - 1;

    while (count > 0) {

        const lastRow = pascalsTriangle[pascalsTriangle.length - 1];
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