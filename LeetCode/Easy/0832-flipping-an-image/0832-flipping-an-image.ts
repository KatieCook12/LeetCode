function flipAndInvertImage(image: number[][]): number[][] {

    for (const matrix of image) {
        const matrixLength: number = matrix.length;
        for (let x = 0; x < matrixLength; x++) {
            matrix[x] === 1 ? matrix[x] = 0 : matrix[x] = 1;
        }
        matrix.reverse();
    }

    return image;
};