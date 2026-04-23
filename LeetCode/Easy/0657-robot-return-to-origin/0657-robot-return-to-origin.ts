function judgeCircle(moves: string): boolean {

    const position: number[] = [0, 0];

    for (const move of moves) {
        switch (move) {
            case "U":
                position[1] = position[1] + 1;
                break;
            case "D":
                position[1] = position[1] - 1;
                break;
            case "L":
                position[0] = position[0] + 1;
                break;
            case "R":
                position[0] = position[0] - 1;
                break;
        }
    }

    return position[0] === 0 && position[1] === 0 ? true : false;
};