function finalPositionOfSnake(n: number, commands: string[]): number {

    let position: number = 0;

    const move: Record<string, number> = {
        DOWN: n,
        UP: -n,
        RIGHT: 1,
        LEFT: -1
    };

    for (const command of commands) {
        position += move[command];
    }

    return position;
}