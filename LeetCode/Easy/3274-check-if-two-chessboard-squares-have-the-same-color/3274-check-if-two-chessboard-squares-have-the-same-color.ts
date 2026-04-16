function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {

    function colourChecker(coordinate: string): boolean {
        return ((coordinate[0].charCodeAt(0)) + +coordinate[1]) % 2 == 0 ? true : false;
    }

    return colourChecker(coordinate1) == colourChecker(coordinate2) ? true : false;
};