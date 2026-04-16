function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {

    function colourChecker(coordinate: string): boolean {

        
        if ((coordinate[0].charCodeAt(0) + +coordinate[1]) % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    if (colourChecker(coordinate1) == colourChecker(coordinate2)) {
        return true;
    } else {
        return false;
    }
};