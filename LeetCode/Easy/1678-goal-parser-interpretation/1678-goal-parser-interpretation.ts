function interpret(command: string): string {

    let word: string = "";
    let i: number = 0;
    const commandLength: number = command.length;

    while (i < commandLength) {

        if (command[i] === "G") {
            word += "G";
            i += 1;
        }
        else {
            if (command[i + 1] === ")") {
                word += "o";
                i += 2;
            }
            else {
                word += "al";
                i += 4;
            }
        }
    }
    
    return word;
};