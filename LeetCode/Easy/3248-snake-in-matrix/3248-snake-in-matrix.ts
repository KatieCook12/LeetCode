function finalPositionOfSnake(n: number, commands: string[]): number {

    let number: number = 0;

    for (const command of commands) {
        if (command == "DOWN") {
            number += n;
        }
        if (command == "RIGHT") {
            number += 1;
        }
        if (command == "UP") {
            number -= n;
        }
        if (command == "LEFT") {
            number -= 1;
        }
    }

    return number;
};