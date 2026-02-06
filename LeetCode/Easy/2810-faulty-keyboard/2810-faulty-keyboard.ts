function finalString(s: string): string {

    let finalString: string = "";
    const sLength: number = s.length;

    for (let i = 0; i < sLength; i++) {

        if (s[i] != "i") {
            finalString = finalString.concat(s[i]);
        }
        else {
            let reversed: string = "";

            for (let x = finalString.length - 1; x >= 0; x--) {
                reversed += finalString[x];
            }

            finalString = reversed;
        }
    }

    return finalString;
}
