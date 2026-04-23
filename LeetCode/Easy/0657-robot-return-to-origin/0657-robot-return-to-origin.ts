function judgeCircle(moves: string): boolean {

    let x: number = 0, y: number = 0;

    for (const move of moves) {
        switch (move) {
            case "U":
                y++; break;
            case "D":
                y--; break;
            case "L":
                x--; break;
            case "R":
                x++; break;
        }
    }

    return x === 0 && y === 0;
};