function findDegrees(matrix: number[][]): number[] {

    const degree: number[] = [];

    for (let row = 0; row < matrix.length; row++) {

        let count: number = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            count += matrix[row][col];
        }

        degree.push(count)
    }

    return degree;
};