function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    
    return (
        (coordinate1.charCodeAt(0) + +coordinate1[1]) % 2 ===
        (coordinate2.charCodeAt(0) + +coordinate2[1]) % 2
    );

};