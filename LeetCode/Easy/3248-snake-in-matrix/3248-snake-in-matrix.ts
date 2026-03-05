function finalPositionOfSnake(n: number, commands: string[]): number {
    
    let position: number = 0;

    for (const command of commands) {
        switch (command) {
            case "DOWN": position += n; break;
            case "UP": position -= n; break;
            case "RIGHT": position += 1; break;
            case "LEFT": position -= 1; break;
        }
    }

    return position;
}